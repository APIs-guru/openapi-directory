import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageSimpleResponse
/** 
 * The simple response message containing speech or text.
**/
export class GoogleCloudDialogflowV2IntentMessageSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=textToSpeech" })
  textToSpeech?: string;
}
