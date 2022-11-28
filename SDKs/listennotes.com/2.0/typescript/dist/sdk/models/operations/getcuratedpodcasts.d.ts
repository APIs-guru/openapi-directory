import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCuratedPodcastsQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class GetCuratedPodcastsHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetCuratedPodcastsRequest extends SpeakeasyBase {
    queryParams: GetCuratedPodcastsQueryParams;
    headers: GetCuratedPodcastsHeaders;
}
export declare class GetCuratedPodcastsResponse extends SpeakeasyBase {
    contentType: string;
    getCuratedPodcastsResponse?: shared.GetCuratedPodcastsResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
