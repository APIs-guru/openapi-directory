import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageCardButton
/** 
 * Optional. Contains information about a button.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageCardButton extends SpeakeasyBase {
  @Metadata({ data: "json, name=postback" })
  postback?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
