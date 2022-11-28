import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlansListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    group?: string;
    groupN?: string;
    groupId?: string;
    groupIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    role?: string;
    roleN?: string;
    roleId?: string;
    roleIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    status?: string;
    statusN?: string;
    tag?: string;
    tagN?: string;
    tenant?: string;
    tenantN?: string;
    tenantGroup?: string;
    tenantGroupN?: string;
    tenantGroupId?: string;
    tenantGroupIdN?: string;
    tenantId?: string;
    tenantIdN?: string;
    vid?: string;
    vidGt?: string;
    vidGte?: string;
    vidLt?: string;
    vidLte?: string;
    vidN?: string;
}
export declare class IpamVlansList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Vlan[];
}
export declare class IpamVlansListRequest extends SpeakeasyBase {
    queryParams: IpamVlansListQueryParams;
}
export declare class IpamVlansListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamVlansList200ApplicationJsonObject?: IpamVlansList200ApplicationJson;
}
