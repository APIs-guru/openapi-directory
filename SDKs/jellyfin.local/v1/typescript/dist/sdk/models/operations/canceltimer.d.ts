import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelTimerPathParams extends SpeakeasyBase {
    timerId: string;
}
export declare class CancelTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CancelTimerRequest extends SpeakeasyBase {
    pathParams: CancelTimerPathParams;
    security: CancelTimerSecurity;
}
export declare class CancelTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
