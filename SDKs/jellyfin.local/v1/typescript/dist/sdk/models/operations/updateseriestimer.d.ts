import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSeriesTimerPathParams extends SpeakeasyBase {
    timerId: string;
}
export declare class UpdateSeriesTimerRequests extends SpeakeasyBase {
    seriesTimerInfoDto?: shared.SeriesTimerInfoDto;
    seriesTimerInfoDto1?: shared.SeriesTimerInfoDto;
    seriesTimerInfoDto2?: shared.SeriesTimerInfoDto;
}
export declare class UpdateSeriesTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateSeriesTimerRequest extends SpeakeasyBase {
    pathParams: UpdateSeriesTimerPathParams;
    request?: UpdateSeriesTimerRequests;
    security: UpdateSeriesTimerSecurity;
}
export declare class UpdateSeriesTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
