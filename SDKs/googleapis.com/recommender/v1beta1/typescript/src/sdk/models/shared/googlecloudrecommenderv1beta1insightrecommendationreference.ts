import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1beta1InsightRecommendationReference
/** 
 * Reference to an associated recommendation.
**/
export class GoogleCloudRecommenderV1beta1InsightRecommendationReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendation" })
  recommendation?: string;
}
