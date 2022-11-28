import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1FeatureMapStringList
/** 
 * A list of string features.
**/
export class GoogleCloudRecommendationengineV1beta1FeatureMapStringList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string[];
}
