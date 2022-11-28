import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";



// GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult
/** 
 * RecommendationResult represents a generic recommendation result with associated metadata.
**/
export class GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: GoogleCloudDiscoveryengineV1betaDocument;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
