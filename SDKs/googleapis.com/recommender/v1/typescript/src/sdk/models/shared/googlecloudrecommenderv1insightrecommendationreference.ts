import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1InsightRecommendationReference
/** 
 * Reference to an associated recommendation.
**/
export class GoogleCloudRecommenderV1InsightRecommendationReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendation" })
  recommendation?: string;
}
