import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMusicArtistRemoteSearchResultsRequests extends SpeakeasyBase {
    artistInfoRemoteSearchQuery?: shared.ArtistInfoRemoteSearchQuery;
    artistInfoRemoteSearchQuery1?: shared.ArtistInfoRemoteSearchQuery;
    artistInfoRemoteSearchQuery2?: shared.ArtistInfoRemoteSearchQuery;
}
export declare class GetMusicArtistRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMusicArtistRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetMusicArtistRemoteSearchResultsRequests;
    security: GetMusicArtistRemoteSearchResultsSecurity;
}
export declare class GetMusicArtistRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
