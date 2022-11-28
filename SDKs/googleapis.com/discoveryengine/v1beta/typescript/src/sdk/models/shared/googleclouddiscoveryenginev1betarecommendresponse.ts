import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult } from "./googleclouddiscoveryenginev1betarecommendresponserecommendationresult";



// GoogleCloudDiscoveryengineV1betaRecommendResponse
/** 
 * Response message for Recommend method.
**/
export class GoogleCloudDiscoveryengineV1betaRecommendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult })
  results?: GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[];

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
