import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiHttpBody } from "./googleapihttpbody";



// GoogleCloudMlV1PredictRequest
/** 
 * Request for predictions to be issued against a trained model.
**/
export class GoogleCloudMlV1PredictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpBody" })
  httpBody?: GoogleApiHttpBody;
}
