import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantsCreateRequest extends SpeakeasyBase {
    request: shared.WritableTenantInput;
}
export declare class TenancyTenantsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenant?: shared.Tenant;
}
