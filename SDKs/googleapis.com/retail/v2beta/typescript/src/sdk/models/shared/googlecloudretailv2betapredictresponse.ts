import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaPredictResponsePredictionResult } from "./googlecloudretailv2betapredictresponsepredictionresult";



// GoogleCloudRetailV2betaPredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRetailV2betaPredictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2betaPredictResponsePredictionResult })
  results?: GoogleCloudRetailV2betaPredictResponsePredictionResult[];

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
