import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1beta1InsightRecommendationReference
/** 
 * Reference to an associated recommendation.
**/
export class GoogleCloudRecommenderV1beta1InsightRecommendationReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recommendation" })
  recommendation?: string;
}
