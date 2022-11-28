import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse
/** 
 * The simple response message containing speech or text.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=textToSpeech" })
  textToSpeech?: string;
}
