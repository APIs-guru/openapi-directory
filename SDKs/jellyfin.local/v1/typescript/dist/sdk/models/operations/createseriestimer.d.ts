import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSeriesTimerRequests extends SpeakeasyBase {
    seriesTimerInfoDto?: shared.SeriesTimerInfoDto;
    seriesTimerInfoDto1?: shared.SeriesTimerInfoDto;
    seriesTimerInfoDto2?: shared.SeriesTimerInfoDto;
}
export declare class CreateSeriesTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateSeriesTimerRequest extends SpeakeasyBase {
    request?: CreateSeriesTimerRequests;
    security: CreateSeriesTimerSecurity;
}
export declare class CreateSeriesTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
