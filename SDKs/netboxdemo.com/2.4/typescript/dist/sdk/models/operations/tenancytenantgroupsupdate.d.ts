import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantGroupsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TenancyTenantGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: TenancyTenantGroupsUpdatePathParams;
    request: shared.TenantGroupInput;
}
export declare class TenancyTenantGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenantGroup?: shared.TenantGroup;
}
