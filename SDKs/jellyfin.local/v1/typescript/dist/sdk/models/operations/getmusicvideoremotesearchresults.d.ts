import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMusicVideoRemoteSearchResultsRequests extends SpeakeasyBase {
    musicVideoInfoRemoteSearchQuery?: shared.MusicVideoInfoRemoteSearchQuery;
    musicVideoInfoRemoteSearchQuery1?: shared.MusicVideoInfoRemoteSearchQuery;
    musicVideoInfoRemoteSearchQuery2?: shared.MusicVideoInfoRemoteSearchQuery;
}
export declare class GetMusicVideoRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMusicVideoRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetMusicVideoRemoteSearchResultsRequests;
    security: GetMusicVideoRemoteSearchResultsSecurity;
}
export declare class GetMusicVideoRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
