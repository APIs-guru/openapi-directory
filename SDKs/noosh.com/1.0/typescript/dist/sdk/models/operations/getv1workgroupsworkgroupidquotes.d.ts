import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetV1WorkgroupsWorkgroupIdQuotesPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetV1WorkgroupsWorkgroupIdQuotesQueryParams extends SpeakeasyBase {
    quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
}
export declare class GetV1WorkgroupsWorkgroupIdQuotesRequest extends SpeakeasyBase {
    pathParams: GetV1WorkgroupsWorkgroupIdQuotesPathParams;
    queryParams: GetV1WorkgroupsWorkgroupIdQuotesQueryParams;
}
export declare class GetV1WorkgroupsWorkgroupIdQuotesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    quoteOfWgLevelSimpleVo?: any;
    statusCode: number;
}
