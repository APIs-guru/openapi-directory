import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetForecastTimeSeriesWrfPathParams extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class GetForecastTimeSeriesWrfQueryParams extends SpeakeasyBase {
    days?: number;
    endtime?: string;
    entryid?: string;
    hours?: number;
    inittime?: string;
    wave?: string;
    weather: string;
}
export declare class GetForecastTimeSeriesWrfRequest extends SpeakeasyBase {
    pathParams: GetForecastTimeSeriesWrfPathParams;
    queryParams: GetForecastTimeSeriesWrfQueryParams;
}
export declare class GetForecastTimeSeriesWrfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
