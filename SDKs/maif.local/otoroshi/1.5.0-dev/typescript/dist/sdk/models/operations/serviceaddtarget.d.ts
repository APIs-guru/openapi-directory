import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceAddTargetPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ServiceAddTargetSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceAddTargetRequest extends SpeakeasyBase {
    pathParams: ServiceAddTargetPathParams;
    request?: shared.Target;
    security: ServiceAddTargetSecurity;
}
export declare class ServiceAddTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targets?: shared.Target[];
}
