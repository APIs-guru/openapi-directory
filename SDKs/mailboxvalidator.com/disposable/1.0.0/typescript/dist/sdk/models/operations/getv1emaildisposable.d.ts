import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetV1EmailDisposableFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1EmailDisposableQueryParams extends SpeakeasyBase {
    email: string;
    format?: GetV1EmailDisposableFormatEnum;
    key: string;
}
export declare class GetV1EmailDisposableRequest extends SpeakeasyBase {
    queryParams: GetV1EmailDisposableQueryParams;
}
export declare class GetV1EmailDisposableResponse extends SpeakeasyBase {
    contentType: string;
    getV1EmailDisposable200ApplicationJsonString?: string;
    statusCode: number;
}
