import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaDocument } from "./googleclouddiscoveryenginev1alphadocument";
/**
 * RecommendationResult represents a generic recommendation result with associated metadata.
**/
export declare class GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult extends SpeakeasyBase {
    document?: GoogleCloudDiscoveryengineV1alphaDocument;
    id?: string;
    metadata?: Map<string, any>;
}
