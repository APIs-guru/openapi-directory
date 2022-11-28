import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMusicAlbumRemoteSearchResultsRequests extends SpeakeasyBase {
    albumInfoRemoteSearchQuery?: shared.AlbumInfoRemoteSearchQuery;
    albumInfoRemoteSearchQuery1?: shared.AlbumInfoRemoteSearchQuery;
    albumInfoRemoteSearchQuery2?: shared.AlbumInfoRemoteSearchQuery;
}
export declare class GetMusicAlbumRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMusicAlbumRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetMusicAlbumRemoteSearchResultsRequests;
    security: GetMusicAlbumRemoteSearchResultsSecurity;
}
export declare class GetMusicAlbumRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
