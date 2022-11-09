import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleApiHttpBody } from "./googleapihttpbody";


// GoogleCloudMlV1ExplainRequest
/** 
 * Request for explanations to be issued against a trained model.
**/
export class GoogleCloudMlV1ExplainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpBody" })
  httpBody?: GoogleApiHttpBody;
}
