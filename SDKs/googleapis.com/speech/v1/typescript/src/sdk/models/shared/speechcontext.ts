import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpeechContext
/** 
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export class SpeechContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=phrases" })
  phrases?: string[];
}
