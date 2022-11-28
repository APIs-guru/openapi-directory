import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2PredictResponsePredictionResult
/** 
 * PredictionResult represents the recommendation prediction results.
**/
export class GoogleCloudRetailV2PredictResponsePredictionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
