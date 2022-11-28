import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTimerRequestsInput extends SpeakeasyBase {
    timerInfoDto?: shared.TimerInfoDtoInput;
    timerInfoDto1?: shared.TimerInfoDtoInput;
    timerInfoDto2?: shared.TimerInfoDtoInput;
}
export declare class CreateTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateTimerRequest extends SpeakeasyBase {
    request?: CreateTimerRequestsInput;
    security: CreateTimerSecurity;
}
export declare class CreateTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
