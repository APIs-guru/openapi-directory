import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult
/** 
 * PredictionResult represents the recommendation prediction results.
**/
export class GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=itemMetadata" })
  itemMetadata?: Map<string, any>;
}
