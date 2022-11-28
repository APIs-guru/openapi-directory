import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrailerRemoteSearchResultsRequests extends SpeakeasyBase {
    trailerInfoRemoteSearchQuery?: shared.TrailerInfoRemoteSearchQuery;
    trailerInfoRemoteSearchQuery1?: shared.TrailerInfoRemoteSearchQuery;
    trailerInfoRemoteSearchQuery2?: shared.TrailerInfoRemoteSearchQuery;
}
export declare class GetTrailerRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetTrailerRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetTrailerRemoteSearchResultsRequests;
    security: GetTrailerRemoteSearchResultsSecurity;
}
export declare class GetTrailerRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
