import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1Submission } from "./googlecloudwebriskv1submission";


// GoogleCloudWebriskV1SubmitUriRequest
/** 
 * Request to send a potentially malicious URI to WebRisk.
**/
export class GoogleCloudWebriskV1SubmitUriRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=submission" })
  submission?: GoogleCloudWebriskV1Submission;
}
