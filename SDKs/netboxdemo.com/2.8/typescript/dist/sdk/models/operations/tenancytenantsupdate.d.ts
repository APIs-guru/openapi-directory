import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TenancyTenantsUpdateRequest extends SpeakeasyBase {
    pathParams: TenancyTenantsUpdatePathParams;
    request: shared.WritableTenantInput;
}
export declare class TenancyTenantsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenant?: shared.Tenant;
}
