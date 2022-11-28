import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageCardButton
/** 
 * Optional. Contains information about a button.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageCardButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postback" })
  postback?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
