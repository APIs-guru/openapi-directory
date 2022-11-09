import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentMessageCardButton
/** 
 * Contains information about a button.
**/
export class GoogleCloudDialogflowV2IntentMessageCardButton extends SpeakeasyBase {
  @Metadata({ data: "json, name=postback" })
  postback?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
