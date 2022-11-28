import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWeatherDisplayPathParams extends SpeakeasyBase {
    stationName: string;
}
export declare class GetWeatherDisplayQueryParams extends SpeakeasyBase {
    period: string;
}
export declare class GetWeatherDisplayRequest extends SpeakeasyBase {
    pathParams: GetWeatherDisplayPathParams;
    queryParams: GetWeatherDisplayQueryParams;
}
export declare class GetWeatherDisplayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
