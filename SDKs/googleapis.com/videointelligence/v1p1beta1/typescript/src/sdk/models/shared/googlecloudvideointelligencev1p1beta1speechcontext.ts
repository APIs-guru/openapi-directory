import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1p1beta1SpeechContext
/** 
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export class GoogleCloudVideointelligenceV1p1beta1SpeechContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=phrases" })
  phrases?: string[];
}
