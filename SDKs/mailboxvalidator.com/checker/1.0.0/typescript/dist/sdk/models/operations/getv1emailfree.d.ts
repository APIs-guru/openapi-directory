import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetV1EmailFreeFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1EmailFreeQueryParams extends SpeakeasyBase {
    email: string;
    format?: GetV1EmailFreeFormatEnum;
    key: string;
}
export declare class GetV1EmailFreeRequest extends SpeakeasyBase {
    queryParams: GetV1EmailFreeQueryParams;
}
export declare class GetV1EmailFreeResponse extends SpeakeasyBase {
    contentType: string;
    getV1EmailFree200ApplicationJsonString?: string;
    statusCode: number;
}
