import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowV2IntentMessageText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
