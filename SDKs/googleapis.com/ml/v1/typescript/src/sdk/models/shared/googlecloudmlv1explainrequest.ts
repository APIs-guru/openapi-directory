import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiHttpBody } from "./googleapihttpbody";



// GoogleCloudMlV1ExplainRequest
/** 
 * Request for explanations to be issued against a trained model.
**/
export class GoogleCloudMlV1ExplainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpBody" })
  httpBody?: GoogleApiHttpBody;
}
