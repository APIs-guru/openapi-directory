import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaPredictResponsePredictionResult
/** 
 * PredictionResult represents the recommendation prediction results.
**/
export class GoogleCloudRetailV2betaPredictResponsePredictionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
