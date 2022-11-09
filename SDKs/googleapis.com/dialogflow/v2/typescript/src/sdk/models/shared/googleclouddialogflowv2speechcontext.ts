import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2SpeechContext
/** 
 * Hints for the speech recognizer to help with recognition in a specific conversation state.
**/
export class GoogleCloudDialogflowV2SpeechContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=phrases" })
  phrases?: string[];
}
