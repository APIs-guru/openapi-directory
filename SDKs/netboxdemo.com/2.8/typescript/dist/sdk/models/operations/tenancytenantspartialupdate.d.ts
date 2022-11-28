import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TenancyTenantsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TenancyTenantsPartialUpdatePathParams;
    request: shared.WritableTenantInput;
}
export declare class TenancyTenantsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenant?: shared.Tenant;
}
