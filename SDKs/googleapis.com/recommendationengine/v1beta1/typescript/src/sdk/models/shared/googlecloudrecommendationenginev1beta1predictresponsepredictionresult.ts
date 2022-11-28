import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult
/** 
 * PredictionResult represents the recommendation prediction results.
**/
export class GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemMetadata" })
  itemMetadata?: Map<string, any>;
}
