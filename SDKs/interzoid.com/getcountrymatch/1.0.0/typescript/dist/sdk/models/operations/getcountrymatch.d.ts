import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetcountrymatchQueryParams extends SpeakeasyBase {
    country: string;
    license: string;
}
export declare class Getcountrymatch200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetcountrymatchRequest extends SpeakeasyBase {
    queryParams: GetcountrymatchQueryParams;
}
export declare class GetcountrymatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getcountrymatch200ApplicationJsonObject?: Getcountrymatch200ApplicationJson;
}
