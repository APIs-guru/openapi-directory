import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetweatherQueryParams extends SpeakeasyBase {
    city: string;
    license: string;
    state: string;
}
export declare class Getweather200ApplicationJson extends SpeakeasyBase {
    city?: string;
    code?: string;
    credits?: string;
    relativeHumidity?: string;
    state?: string;
    tempC?: string;
    tempF?: string;
    visibilityMiles?: string;
    weather?: string;
    windDir?: string;
    windMph?: string;
}
export declare class GetweatherRequest extends SpeakeasyBase {
    queryParams: GetweatherQueryParams;
}
export declare class GetweatherResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getweather200ApplicationJsonObject?: Getweather200ApplicationJson;
}
