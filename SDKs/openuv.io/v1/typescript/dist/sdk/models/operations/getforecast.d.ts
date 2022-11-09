import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetForecastQueryParams extends SpeakeasyBase {
    alt?: number;
    dt?: Date;
    lat: number;
    lng: number;
    ozone?: number;
}
export declare class GetForecastHeaders extends SpeakeasyBase {
    xAccessToken: string;
}
export declare class GetForecastRequest extends SpeakeasyBase {
    queryParams: GetForecastQueryParams;
    headers: GetForecastHeaders;
}
export declare class GetForecastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    forecastResults?: shared.Forecast[][];
}
