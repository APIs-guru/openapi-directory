import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetweatherzipcodeQueryParams extends SpeakeasyBase {
    license: string;
    zip: string;
}
export declare class Getweatherzipcode200ApplicationJson extends SpeakeasyBase {
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
export declare class GetweatherzipcodeRequest extends SpeakeasyBase {
    queryParams: GetweatherzipcodeQueryParams;
}
export declare class GetweatherzipcodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getweatherzipcode200ApplicationJsonObject?: Getweatherzipcode200ApplicationJson;
}
