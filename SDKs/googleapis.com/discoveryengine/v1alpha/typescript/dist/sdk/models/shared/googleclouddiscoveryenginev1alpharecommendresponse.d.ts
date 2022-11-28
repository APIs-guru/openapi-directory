import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult } from "./googleclouddiscoveryenginev1alpharecommendresponserecommendationresult";
/**
 * Response message for Recommend method.
**/
export declare class GoogleCloudDiscoveryengineV1alphaRecommendResponse extends SpeakeasyBase {
    attributionToken?: string;
    missingIds?: string[];
    results?: GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult[];
    validateOnly?: boolean;
}
