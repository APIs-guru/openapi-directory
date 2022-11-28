import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBookRemoteSearchResultsRequests extends SpeakeasyBase {
    bookInfoRemoteSearchQuery?: shared.BookInfoRemoteSearchQuery;
    bookInfoRemoteSearchQuery1?: shared.BookInfoRemoteSearchQuery;
    bookInfoRemoteSearchQuery2?: shared.BookInfoRemoteSearchQuery;
}
export declare class GetBookRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetBookRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetBookRemoteSearchResultsRequests;
    security: GetBookRemoteSearchResultsSecurity;
}
export declare class GetBookRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
