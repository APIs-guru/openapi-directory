import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1Submission } from "./googlecloudwebriskv1submission";



// GoogleCloudWebriskV1SubmitUriRequest
/** 
 * Request to send a potentially malicious URI to WebRisk.
**/
export class GoogleCloudWebriskV1SubmitUriRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: GoogleCloudWebriskV1Submission;
}
