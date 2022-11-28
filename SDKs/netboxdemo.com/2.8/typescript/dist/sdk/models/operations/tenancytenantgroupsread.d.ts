import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantGroupsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TenancyTenantGroupsReadRequest extends SpeakeasyBase {
    pathParams: TenancyTenantGroupsReadPathParams;
}
export declare class TenancyTenantGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenantGroup?: shared.TenantGroup;
}
