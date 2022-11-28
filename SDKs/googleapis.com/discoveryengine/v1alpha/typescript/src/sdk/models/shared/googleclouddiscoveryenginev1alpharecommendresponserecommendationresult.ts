import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaDocument } from "./googleclouddiscoveryenginev1alphadocument";



// GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult
/** 
 * RecommendationResult represents a generic recommendation result with associated metadata.
**/
export class GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: GoogleCloudDiscoveryengineV1alphaDocument;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
