import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMovieRemoteSearchResultsRequests extends SpeakeasyBase {
    movieInfoRemoteSearchQuery?: shared.MovieInfoRemoteSearchQuery;
    movieInfoRemoteSearchQuery1?: shared.MovieInfoRemoteSearchQuery;
    movieInfoRemoteSearchQuery2?: shared.MovieInfoRemoteSearchQuery;
}
export declare class GetMovieRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMovieRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetMovieRemoteSearchResultsRequests;
    security: GetMovieRemoteSearchResultsSecurity;
}
export declare class GetMovieRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
