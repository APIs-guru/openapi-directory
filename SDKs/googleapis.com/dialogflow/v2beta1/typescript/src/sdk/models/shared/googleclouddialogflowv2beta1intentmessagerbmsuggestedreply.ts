import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply
/** 
 * Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=postbackData" })
  postbackData?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
