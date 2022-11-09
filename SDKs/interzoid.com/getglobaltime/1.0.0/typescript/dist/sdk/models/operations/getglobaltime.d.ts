import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetglobaltimeQueryParams extends SpeakeasyBase {
    license: string;
    locale: string;
}
export declare class GetglobaltimeRequest extends SpeakeasyBase {
    queryParams: GetglobaltimeQueryParams;
}
export declare class Getglobaltime200ApplicationJson extends SpeakeasyBase {
    clockTime?: string;
    code?: string;
    credits?: string;
    currentDate?: string;
    currentTime?: string;
    day?: string;
    hour?: string;
    locale?: string;
    minute?: string;
    month?: string;
    monthNumber?: string;
    second?: string;
    timeStamp?: string;
    weekday?: string;
    year?: string;
    zone?: string;
}
export declare class GetglobaltimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getglobaltime200ApplicationJsonObject?: Getglobaltime200ApplicationJson;
}
