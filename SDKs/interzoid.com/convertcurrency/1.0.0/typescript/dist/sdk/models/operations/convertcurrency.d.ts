import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConvertcurrencyQueryParams extends SpeakeasyBase {
    amount: string;
    from: string;
    license: string;
    to: string;
}
export declare class Convertcurrency200ApplicationJson extends SpeakeasyBase {
    code?: string;
    converted?: string;
    credits?: string;
    currency?: string;
}
export declare class ConvertcurrencyRequest extends SpeakeasyBase {
    queryParams: ConvertcurrencyQueryParams;
}
export declare class ConvertcurrencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    convertcurrency200ApplicationJsonObject?: Convertcurrency200ApplicationJson;
}
