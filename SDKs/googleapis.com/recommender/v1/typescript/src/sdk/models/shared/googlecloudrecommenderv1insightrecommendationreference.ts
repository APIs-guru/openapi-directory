import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1InsightRecommendationReference
/** 
 * Reference to an associated recommendation.
**/
export class GoogleCloudRecommenderV1InsightRecommendationReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recommendation" })
  recommendation?: string;
}
