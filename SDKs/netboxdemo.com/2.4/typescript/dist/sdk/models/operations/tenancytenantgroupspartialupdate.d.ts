import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantGroupsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TenancyTenantGroupsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TenancyTenantGroupsPartialUpdatePathParams;
    request: shared.TenantGroupInput;
}
export declare class TenancyTenantGroupsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenantGroup?: shared.TenantGroup;
}
