import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetglobalnumberinfoQueryParams extends SpeakeasyBase {
    intlnumber: string;
    license: string;
}
export declare class GetglobalnumberinfoRequest extends SpeakeasyBase {
    queryParams: GetglobalnumberinfoQueryParams;
}
export declare class Getglobalnumberinfo200ApplicationJson extends SpeakeasyBase {
    code?: string;
    country?: string;
    credits?: string;
    language2?: string;
    language3?: string;
    mobile?: string;
    primaryCity?: string;
    primaryLanguage?: string;
    region?: string;
    wealth?: string;
}
export declare class GetglobalnumberinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getglobalnumberinfo200ApplicationJsonObject?: Getglobalnumberinfo200ApplicationJson;
}
