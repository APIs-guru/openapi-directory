import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelSeriesTimerPathParams extends SpeakeasyBase {
    timerId: string;
}
export declare class CancelSeriesTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CancelSeriesTimerRequest extends SpeakeasyBase {
    pathParams: CancelSeriesTimerPathParams;
    security: CancelSeriesTimerSecurity;
}
export declare class CancelSeriesTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
