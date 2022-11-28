import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPodcastRecommendationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPodcastRecommendationsQueryParams extends SpeakeasyBase {
    safeMode?: number;
}
export declare class GetPodcastRecommendationsHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetPodcastRecommendationsRequest extends SpeakeasyBase {
    pathParams: GetPodcastRecommendationsPathParams;
    queryParams: GetPodcastRecommendationsQueryParams;
    headers: GetPodcastRecommendationsHeaders;
}
export declare class GetPodcastRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    getPodcastRecommendationsResponse?: shared.GetPodcastRecommendationsResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
