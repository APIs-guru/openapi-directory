import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1SpeechContext
/** 
 * Hints for the speech recognizer to help with recognition in a specific conversation state.
**/
export class GoogleCloudDialogflowV2beta1SpeechContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=phrases" })
  phrases?: string[];
}
