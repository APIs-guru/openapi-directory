import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetV1CategoryListOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1CategoryListOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetV1CategoryListOutputFormatOutputFormatEnum;
}
export declare enum GetV1CategoryListOutputFormatTypeEnum {
    Tech = "tech",
    User = "user",
    Regulation = "regulation",
    Incentive = "incentive"
}
export declare class GetV1CategoryListOutputFormatQueryParams extends SpeakeasyBase {
    apiKey: string;
    type?: GetV1CategoryListOutputFormatTypeEnum;
}
export declare class GetV1CategoryListOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetV1CategoryListOutputFormatPathParams;
    queryParams: GetV1CategoryListOutputFormatQueryParams;
}
export declare class GetV1CategoryListOutputFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
