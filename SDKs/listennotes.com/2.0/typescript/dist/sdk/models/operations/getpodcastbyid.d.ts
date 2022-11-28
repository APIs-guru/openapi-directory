import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPodcastByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetPodcastByIdSortEnum {
    RecentFirst = "recent_first",
    OldestFirst = "oldest_first"
}
export declare class GetPodcastByIdQueryParams extends SpeakeasyBase {
    nextEpisodePubDate?: number;
    sort?: GetPodcastByIdSortEnum;
}
export declare class GetPodcastByIdHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetPodcastByIdRequest extends SpeakeasyBase {
    pathParams: GetPodcastByIdPathParams;
    queryParams: GetPodcastByIdQueryParams;
    headers: GetPodcastByIdHeaders;
}
export declare class GetPodcastByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    podcastFull?: shared.PodcastFull;
    statusCode: number;
}
