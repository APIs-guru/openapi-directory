import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult } from "./googleclouddiscoveryenginev1betarecommendresponserecommendationresult";
/**
 * Response message for Recommend method.
**/
export declare class GoogleCloudDiscoveryengineV1betaRecommendResponse extends SpeakeasyBase {
    attributionToken?: string;
    missingIds?: string[];
    results?: GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[];
    validateOnly?: boolean;
}
