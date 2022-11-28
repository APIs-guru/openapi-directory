import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageCardButton
/** 
 * Contains information about a button.
**/
export class GoogleCloudDialogflowV2IntentMessageCardButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postback" })
  postback?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
