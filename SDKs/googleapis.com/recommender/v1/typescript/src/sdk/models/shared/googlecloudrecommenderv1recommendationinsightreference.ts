import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1RecommendationInsightReference
/** 
 * Reference to an associated insight.
**/
export class GoogleCloudRecommenderV1RecommendationInsightReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insight" })
  insight?: string;
}
