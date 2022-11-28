import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetcitystandardQueryParams extends SpeakeasyBase {
    city: string;
    license: string;
}
export declare class Getcitystandard200ApplicationJson extends SpeakeasyBase {
    cityStandard?: string;
    code?: string;
    credits?: string;
}
export declare class GetcitystandardRequest extends SpeakeasyBase {
    queryParams: GetcitystandardQueryParams;
}
export declare class GetcitystandardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getcitystandard200ApplicationJsonObject?: Getcitystandard200ApplicationJson;
}
