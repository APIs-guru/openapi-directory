import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaPredictResponsePredictionResult } from "./googlecloudretailv2betapredictresponsepredictionresult";


// GoogleCloudRetailV2betaPredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRetailV2betaPredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRetailV2betaPredictResponsePredictionResult })
  results?: GoogleCloudRetailV2betaPredictResponsePredictionResult[];

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
