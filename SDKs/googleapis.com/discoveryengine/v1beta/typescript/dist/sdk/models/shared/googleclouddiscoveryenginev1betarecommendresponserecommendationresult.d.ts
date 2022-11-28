import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";
/**
 * RecommendationResult represents a generic recommendation result with associated metadata.
**/
export declare class GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult extends SpeakeasyBase {
    document?: GoogleCloudDiscoveryengineV1betaDocument;
    id?: string;
    metadata?: Map<string, any>;
}
