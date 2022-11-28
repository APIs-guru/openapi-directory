import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpeechContext
/** 
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export class SpeechContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=phrases" })
  phrases?: string[];
}
