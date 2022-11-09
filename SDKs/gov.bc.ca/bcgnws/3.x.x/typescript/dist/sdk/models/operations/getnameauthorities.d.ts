import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNameAuthoritiesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetNameAuthoritiesQueryParams extends SpeakeasyBase {
    outputFormat: GetNameAuthoritiesOutputFormatEnum;
}
export declare class GetNameAuthoritiesRequest extends SpeakeasyBase {
    queryParams: GetNameAuthoritiesQueryParams;
}
export declare class GetNameAuthoritiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
