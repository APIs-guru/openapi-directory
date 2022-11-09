import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaPredictResponsePredictionResult } from "./googlecloudretailv2alphapredictresponsepredictionresult";


// GoogleCloudRetailV2alphaPredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRetailV2alphaPredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRetailV2alphaPredictResponsePredictionResult })
  results?: GoogleCloudRetailV2alphaPredictResponsePredictionResult[];

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
