import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateServiceTargetsPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class UpdateServiceTargetsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateServiceTargetsRequest extends SpeakeasyBase {
    pathParams: UpdateServiceTargetsPathParams;
    request?: shared.Patch[];
    security: UpdateServiceTargetsSecurity;
}
export declare class UpdateServiceTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targets?: shared.Target[];
}
