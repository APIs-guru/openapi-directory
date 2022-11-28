import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Recommendation } from "./googlecloudrecommenderv1beta1recommendation";
/**
 * Response to the `ListRecommendations` method.
**/
export declare class GoogleCloudRecommenderV1beta1ListRecommendationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    recommendations?: GoogleCloudRecommenderV1beta1Recommendation[];
}
