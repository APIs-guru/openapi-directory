import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetV1ValidationSingleFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1ValidationSingleQueryParams extends SpeakeasyBase {
    email: string;
    format?: GetV1ValidationSingleFormatEnum;
    key: string;
}
export declare class GetV1ValidationSingleRequest extends SpeakeasyBase {
    queryParams: GetV1ValidationSingleQueryParams;
}
export declare class GetV1ValidationSingleResponse extends SpeakeasyBase {
    contentType: string;
    getV1ValidationSingle200ApplicationJsonString?: string;
    statusCode: number;
}
