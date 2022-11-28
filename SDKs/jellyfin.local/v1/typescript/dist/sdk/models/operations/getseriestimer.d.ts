import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSeriesTimerPathParams extends SpeakeasyBase {
    timerId: string;
}
export declare class GetSeriesTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSeriesTimerRequest extends SpeakeasyBase {
    pathParams: GetSeriesTimerPathParams;
    security: GetSeriesTimerSecurity;
}
export declare class GetSeriesTimerResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    seriesTimerInfoDto?: shared.SeriesTimerInfoDto;
    statusCode: number;
}
