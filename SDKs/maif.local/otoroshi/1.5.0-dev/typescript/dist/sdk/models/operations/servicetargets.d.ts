import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceTargetsPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ServiceTargetsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceTargetsRequest extends SpeakeasyBase {
    pathParams: ServiceTargetsPathParams;
    security: ServiceTargetsSecurity;
}
export declare class ServiceTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targets?: shared.Target[];
}
