import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetQueryParams extends SpeakeasyBase {
    format?: GetFormatEnum;
    ip: string;
    key: string;
    package?: string;
}
export declare class GetRequest extends SpeakeasyBase {
    queryParams: GetQueryParams;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    get200TextHtmlString?: string;
    statusCode: number;
}
