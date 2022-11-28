import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult } from "./googleclouddiscoveryenginev1alpharecommendresponserecommendationresult";



// GoogleCloudDiscoveryengineV1alphaRecommendResponse
/** 
 * Response message for Recommend method.
**/
export class GoogleCloudDiscoveryengineV1alphaRecommendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult })
  results?: GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult[];

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
