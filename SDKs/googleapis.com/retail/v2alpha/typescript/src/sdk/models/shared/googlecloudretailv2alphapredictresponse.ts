import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaPredictResponsePredictionResult } from "./googlecloudretailv2alphapredictresponsepredictionresult";



// GoogleCloudRetailV2alphaPredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRetailV2alphaPredictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2alphaPredictResponsePredictionResult })
  results?: GoogleCloudRetailV2alphaPredictResponsePredictionResult[];

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
