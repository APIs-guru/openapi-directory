import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSectionSearchResultsPathParams extends SpeakeasyBase {
    searchTerm: string;
}
export declare class GetSectionSearchResultsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetSectionSearchResultsRequest extends SpeakeasyBase {
    pathParams: GetSectionSearchResultsPathParams;
    queryParams: GetSectionSearchResultsQueryParams;
}
export declare class GetSectionSearchResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySearchErskineMaySectionSearchResult?: shared.ErskineMaySearchErskineMaySectionSearchResult;
    statusCode: number;
}
