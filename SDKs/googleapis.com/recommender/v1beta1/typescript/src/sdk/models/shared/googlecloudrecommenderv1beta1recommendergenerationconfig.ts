import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1beta1RecommenderGenerationConfig
/** 
 * A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
**/
export class GoogleCloudRecommenderV1beta1RecommenderGenerationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;
}
