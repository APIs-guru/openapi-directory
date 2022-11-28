import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTimerPathParams extends SpeakeasyBase {
    timerId: string;
}
export declare class UpdateTimerRequestsInput extends SpeakeasyBase {
    timerInfoDto?: shared.TimerInfoDtoInput;
    timerInfoDto1?: shared.TimerInfoDtoInput;
    timerInfoDto2?: shared.TimerInfoDtoInput;
}
export declare class UpdateTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateTimerRequest extends SpeakeasyBase {
    pathParams: UpdateTimerPathParams;
    request?: UpdateTimerRequestsInput;
    security: UpdateTimerSecurity;
}
export declare class UpdateTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
