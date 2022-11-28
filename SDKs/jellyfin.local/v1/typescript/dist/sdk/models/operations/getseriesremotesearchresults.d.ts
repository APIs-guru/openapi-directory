import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSeriesRemoteSearchResultsRequests extends SpeakeasyBase {
    seriesInfoRemoteSearchQuery?: shared.SeriesInfoRemoteSearchQuery;
    seriesInfoRemoteSearchQuery1?: shared.SeriesInfoRemoteSearchQuery;
    seriesInfoRemoteSearchQuery2?: shared.SeriesInfoRemoteSearchQuery;
}
export declare class GetSeriesRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSeriesRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetSeriesRemoteSearchResultsRequests;
    security: GetSeriesRemoteSearchResultsSecurity;
}
export declare class GetSeriesRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
