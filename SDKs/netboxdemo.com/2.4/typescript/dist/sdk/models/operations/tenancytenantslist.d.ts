import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantsListQueryParams extends SpeakeasyBase {
    group?: string;
    groupId?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    tag?: string;
}
export declare class TenancyTenantsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tenant[];
}
export declare class TenancyTenantsListRequest extends SpeakeasyBase {
    queryParams: TenancyTenantsListQueryParams;
}
export declare class TenancyTenantsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenancyTenantsList200ApplicationJsonObject?: TenancyTenantsList200ApplicationJson;
}
