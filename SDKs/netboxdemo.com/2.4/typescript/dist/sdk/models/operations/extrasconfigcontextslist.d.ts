import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasConfigContextsListQueryParams extends SpeakeasyBase {
    isActive?: string;
    limit?: number;
    name?: string;
    offset?: number;
    platform?: string;
    platformId?: string;
    q?: string;
    region?: string;
    regionId?: string;
    role?: string;
    roleId?: string;
    site?: string;
    siteId?: string;
    tenant?: string;
    tenantGroup?: string;
    tenantGroupId?: string;
    tenantId?: string;
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
