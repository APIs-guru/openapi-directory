import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIndexTermSearchResultsPathParams extends SpeakeasyBase {
    searchTerm: string;
}
export declare class GetIndexTermSearchResultsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetIndexTermSearchResultsRequest extends SpeakeasyBase {
    pathParams: GetIndexTermSearchResultsPathParams;
    queryParams: GetIndexTermSearchResultsQueryParams;
}
export declare class GetIndexTermSearchResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySearchErskineMayIndexTermSearchResult?: shared.ErskineMaySearchErskineMayIndexTermSearchResult;
    statusCode: number;
}
