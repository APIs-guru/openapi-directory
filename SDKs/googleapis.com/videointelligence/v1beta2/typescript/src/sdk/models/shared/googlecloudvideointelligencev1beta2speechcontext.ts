import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1beta2SpeechContext
/** 
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export class GoogleCloudVideointelligenceV1beta2SpeechContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=phrases" })
  phrases?: string[];
}
