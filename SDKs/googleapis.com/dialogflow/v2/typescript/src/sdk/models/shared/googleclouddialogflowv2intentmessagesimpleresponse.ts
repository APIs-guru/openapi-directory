import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentMessageSimpleResponse
/** 
 * The simple response message containing speech or text.
**/
export class GoogleCloudDialogflowV2IntentMessageSimpleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayText" })
  displayText?: string;

  @Metadata({ data: "json, name=ssml" })
  ssml?: string;

  @Metadata({ data: "json, name=textToSpeech" })
  textToSpeech?: string;
}
