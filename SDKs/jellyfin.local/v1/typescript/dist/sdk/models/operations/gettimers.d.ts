import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimersQueryParams extends SpeakeasyBase {
    channelId?: string;
    isActive?: boolean;
    isScheduled?: boolean;
    seriesTimerId?: string;
}
export declare class GetTimersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetTimersRequest extends SpeakeasyBase {
    queryParams: GetTimersQueryParams;
    security: GetTimersSecurity;
}
export declare class GetTimersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timerInfoDtoQueryResult?: shared.TimerInfoDtoQueryResult;
}
