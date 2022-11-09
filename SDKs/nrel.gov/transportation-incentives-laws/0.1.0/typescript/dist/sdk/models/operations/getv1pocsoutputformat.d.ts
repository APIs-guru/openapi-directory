import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetV1PocsOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1PocsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetV1PocsOutputFormatOutputFormatEnum;
}
export declare class GetV1PocsOutputFormatQueryParams extends SpeakeasyBase {
    apiKey: string;
    jurisdiction: string;
}
export declare class GetV1PocsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetV1PocsOutputFormatPathParams;
    queryParams: GetV1PocsOutputFormatQueryParams;
}
export declare class GetV1PocsOutputFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
