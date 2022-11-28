import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1RecommenderGenerationConfig
/** 
 * A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
**/
export class GoogleCloudRecommenderV1RecommenderGenerationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;
}
