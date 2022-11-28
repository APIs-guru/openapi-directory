import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantGroupsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class TenancyTenantGroupsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.TenantGroup[];
}
export declare class TenancyTenantGroupsListRequest extends SpeakeasyBase {
    queryParams: TenancyTenantGroupsListQueryParams;
}
export declare class TenancyTenantGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenancyTenantGroupsList200ApplicationJsonObject?: TenancyTenantGroupsList200ApplicationJson;
}
