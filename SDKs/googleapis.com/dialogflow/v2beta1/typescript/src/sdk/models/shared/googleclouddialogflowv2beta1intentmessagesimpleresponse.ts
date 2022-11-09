import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse
/** 
 * The simple response message containing speech or text.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayText" })
  displayText?: string;

  @Metadata({ data: "json, name=ssml" })
  ssml?: string;

  @Metadata({ data: "json, name=textToSpeech" })
  textToSpeech?: string;
}
