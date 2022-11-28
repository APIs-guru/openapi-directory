import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVrfsListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    enforceUnique?: string;
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
    rd?: string;
    rdIc?: string;
    rdIe?: string;
    rdIew?: string;
    rdIsw?: string;
    rdN?: string;
    rdNic?: string;
    rdNie?: string;
    rdNiew?: string;
    rdNisw?: string;
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
export declare class IpamVrfsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Vrf[];
}
export declare class IpamVrfsListRequest extends SpeakeasyBase {
    queryParams: IpamVrfsListQueryParams;
}
export declare class IpamVrfsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamVrfsList200ApplicationJsonObject?: IpamVrfsList200ApplicationJson;
}
