import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageQuickReplies
/** 
 * The quick replies response message.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageQuickReplies extends SpeakeasyBase {
  @Metadata({ data: "json, name=quickReplies" })
  quickReplies?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
