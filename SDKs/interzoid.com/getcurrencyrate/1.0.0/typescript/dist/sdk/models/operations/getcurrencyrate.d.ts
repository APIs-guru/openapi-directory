import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetcurrencyrateQueryParams extends SpeakeasyBase {
    license: string;
    symbol: string;
}
export declare class GetcurrencyrateRequest extends SpeakeasyBase {
    queryParams: GetcurrencyrateQueryParams;
}
export declare class Getcurrencyrate200ApplicationJson extends SpeakeasyBase {
    code?: string;
    country?: string;
    credits?: string;
    name?: string;
    rate?: string;
    symbol?: string;
}
export declare class GetcurrencyrateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getcurrencyrate200ApplicationJsonObject?: Getcurrencyrate200ApplicationJson;
}
