import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2PredictResponsePredictionResult } from "./googlecloudretailv2predictresponsepredictionresult";



// GoogleCloudRetailV2PredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRetailV2PredictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2PredictResponsePredictionResult })
  results?: GoogleCloudRetailV2PredictResponsePredictionResult[];

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
