import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBestPodcastsQueryParams extends SpeakeasyBase {
    genreId?: string;
    language?: string;
    page?: number;
    publisherRegion?: string;
    region?: string;
    safeMode?: number;
}
export declare class GetBestPodcastsHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetBestPodcastsRequest extends SpeakeasyBase {
    queryParams: GetBestPodcastsQueryParams;
    headers: GetBestPodcastsHeaders;
}
export declare class GetBestPodcastsResponse extends SpeakeasyBase {
    bestPodcastsResponse?: shared.BestPodcastsResponse;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
