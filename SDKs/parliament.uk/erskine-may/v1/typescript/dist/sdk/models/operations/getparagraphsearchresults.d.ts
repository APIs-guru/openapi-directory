import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParagraphSearchResultsPathParams extends SpeakeasyBase {
    searchTerm: string;
}
export declare class GetParagraphSearchResultsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetParagraphSearchResultsRequest extends SpeakeasyBase {
    pathParams: GetParagraphSearchResultsPathParams;
    queryParams: GetParagraphSearchResultsQueryParams;
}
export declare class GetParagraphSearchResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySearchErskineMayParagraphSearchResult?: shared.ErskineMaySearchErskineMayParagraphSearchResult;
    statusCode: number;
}
