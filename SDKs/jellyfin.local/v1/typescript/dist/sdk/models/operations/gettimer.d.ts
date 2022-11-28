import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimerPathParams extends SpeakeasyBase {
    timerId: string;
}
export declare class GetTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetTimerRequest extends SpeakeasyBase {
    pathParams: GetTimerPathParams;
    security: GetTimerSecurity;
}
export declare class GetTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timerInfoDto?: shared.TimerInfoDto;
}
