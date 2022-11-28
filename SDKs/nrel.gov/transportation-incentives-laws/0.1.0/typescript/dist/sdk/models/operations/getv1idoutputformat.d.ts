import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetV1IdOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1IdOutputFormatPathParams extends SpeakeasyBase {
    id: number;
    outputFormat: GetV1IdOutputFormatOutputFormatEnum;
}
export declare class GetV1IdOutputFormatQueryParams extends SpeakeasyBase {
    apiKey: string;
    expired?: boolean;
    poc?: boolean;
}
export declare class GetV1IdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetV1IdOutputFormatPathParams;
    queryParams: GetV1IdOutputFormatQueryParams;
}
export declare class GetV1IdOutputFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
