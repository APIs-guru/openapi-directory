import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetcountrystandardQueryParams extends SpeakeasyBase {
    country: string;
    license: string;
}
export declare class Getcountrystandard200ApplicationJson extends SpeakeasyBase {
    code?: string;
    countryStandard?: string;
    credits?: string;
}
export declare class GetcountrystandardRequest extends SpeakeasyBase {
    queryParams: GetcountrystandardQueryParams;
}
export declare class GetcountrystandardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getcountrystandard200ApplicationJsonObject?: Getcountrystandard200ApplicationJson;
}
