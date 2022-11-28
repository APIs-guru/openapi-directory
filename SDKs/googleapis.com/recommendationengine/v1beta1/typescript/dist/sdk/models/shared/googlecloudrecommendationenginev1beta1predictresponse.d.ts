import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult } from "./googlecloudrecommendationenginev1beta1predictresponsepredictionresult";
/**
 * Response message for predict method.
**/
export declare class GoogleCloudRecommendationengineV1beta1PredictResponse extends SpeakeasyBase {
    dryRun?: boolean;
    itemsMissingInCatalog?: string[];
    metadata?: Map<string, any>;
    nextPageToken?: string;
    recommendationToken?: string;
    results?: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[];
}
