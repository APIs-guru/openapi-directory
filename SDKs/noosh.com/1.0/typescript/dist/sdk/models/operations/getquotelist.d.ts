import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuoteListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetQuoteListQueryParams extends SpeakeasyBase {
    quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
}
export declare class GetQuoteListRequest extends SpeakeasyBase {
    pathParams: GetQuoteListPathParams;
    queryParams: GetQuoteListQueryParams;
}
export declare class GetQuoteListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    quoteListVo?: any;
    statusCode: number;
}
