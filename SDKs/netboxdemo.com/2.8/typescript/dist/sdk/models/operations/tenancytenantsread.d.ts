import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TenancyTenantsReadRequest extends SpeakeasyBase {
    pathParams: TenancyTenantsReadPathParams;
}
export declare class TenancyTenantsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenant?: shared.Tenant;
}
