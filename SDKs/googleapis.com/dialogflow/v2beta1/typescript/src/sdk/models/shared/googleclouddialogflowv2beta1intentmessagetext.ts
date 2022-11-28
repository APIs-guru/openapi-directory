import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
