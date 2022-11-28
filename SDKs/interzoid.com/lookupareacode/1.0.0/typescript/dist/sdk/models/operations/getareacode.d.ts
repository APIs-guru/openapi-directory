import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetareacodeQueryParams extends SpeakeasyBase {
    areacode: string;
    license: string;
}
export declare class Getareacode200ApplicationJson extends SpeakeasyBase {
    abbreviation?: string;
    areaCode?: string;
    code?: string;
    credits?: string;
    locale?: string;
    primaryCity?: string;
}
export declare class GetareacodeRequest extends SpeakeasyBase {
    queryParams: GetareacodeQueryParams;
}
export declare class GetareacodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getareacode200ApplicationJsonObject?: Getareacode200ApplicationJson;
}
