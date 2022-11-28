import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimVirtualChassisListQueryParams extends SpeakeasyBase {
    domain?: string;
    domainIc?: string;
    domainIe?: string;
    domainIew?: string;
    domainIsw?: string;
    domainN?: string;
    domainNic?: string;
    domainNie?: string;
    domainNiew?: string;
    domainNisw?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    offset?: number;
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    tag?: string;
    tagN?: string;
    tenant?: string;
    tenantN?: string;
    tenantId?: string;
    tenantIdN?: string;
}
export declare class DcimVirtualChassisList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualChassis[];
}
export declare class DcimVirtualChassisListRequest extends SpeakeasyBase {
    queryParams: DcimVirtualChassisListQueryParams;
}
export declare class DcimVirtualChassisListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimVirtualChassisList200ApplicationJsonObject?: DcimVirtualChassisList200ApplicationJson;
}
