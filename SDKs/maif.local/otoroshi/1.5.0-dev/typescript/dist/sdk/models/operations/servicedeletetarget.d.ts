import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceDeleteTargetPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ServiceDeleteTargetSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceDeleteTargetRequest extends SpeakeasyBase {
    pathParams: ServiceDeleteTargetPathParams;
    security: ServiceDeleteTargetSecurity;
}
export declare class ServiceDeleteTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targets?: shared.Target[];
}
