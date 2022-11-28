import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasConfigContextsListQueryParams extends SpeakeasyBase {
    clusterGroup?: string;
    clusterGroupN?: string;
    clusterGroupId?: string;
    clusterGroupIdN?: string;
    clusterId?: string;
    clusterIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    isActive?: string;
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
    platform?: string;
    platformN?: string;
    platformId?: string;
    platformIdN?: string;
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
}
export declare class ExtrasConfigContextsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConfigContext[];
}
export declare class ExtrasConfigContextsListRequest extends SpeakeasyBase {
    queryParams: ExtrasConfigContextsListQueryParams;
}
export declare class ExtrasConfigContextsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasConfigContextsList200ApplicationJsonObject?: ExtrasConfigContextsList200ApplicationJson;
}
