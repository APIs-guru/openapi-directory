import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageQuickReplies
/** 
 * The quick replies response message.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageQuickReplies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quickReplies" })
  quickReplies?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
