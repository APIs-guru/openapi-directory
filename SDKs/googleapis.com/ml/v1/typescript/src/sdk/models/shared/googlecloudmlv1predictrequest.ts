import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleApiHttpBody } from "./googleapihttpbody";


// GoogleCloudMlV1PredictRequest
/** 
 * Request for predictions to be issued against a trained model.
**/
export class GoogleCloudMlV1PredictRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpBody" })
  httpBody?: GoogleApiHttpBody;
}
