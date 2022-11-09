import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetForecastTimeSeriesPathParams extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class GetForecastTimeSeriesQueryParams extends SpeakeasyBase {
    days?: number;
    endtime?: string;
    entryid?: string;
    hours?: number;
    inittime?: string;
    wave?: string;
    weather: string;
}
export declare class GetForecastTimeSeriesRequest extends SpeakeasyBase {
    pathParams: GetForecastTimeSeriesPathParams;
    queryParams: GetForecastTimeSeriesQueryParams;
}
export declare class GetForecastTimeSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
