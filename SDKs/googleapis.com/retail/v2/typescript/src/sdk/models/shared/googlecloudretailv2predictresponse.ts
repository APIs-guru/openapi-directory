import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2PredictResponsePredictionResult } from "./googlecloudretailv2predictresponsepredictionresult";


// GoogleCloudRetailV2PredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRetailV2PredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=missingIds" })
  missingIds?: string[];

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRetailV2PredictResponsePredictionResult })
  results?: GoogleCloudRetailV2PredictResponsePredictionResult[];

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
