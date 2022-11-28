import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Recommendation } from "./googlecloudrecommenderv1recommendation";
/**
 * Response to the `ListRecommendations` method.
**/
export declare class GoogleCloudRecommenderV1ListRecommendationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    recommendations?: GoogleCloudRecommenderV1Recommendation[];
}
