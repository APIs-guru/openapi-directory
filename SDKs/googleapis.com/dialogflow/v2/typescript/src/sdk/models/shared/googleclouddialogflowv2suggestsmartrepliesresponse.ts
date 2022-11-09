import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2SmartReplyAnswer } from "./googleclouddialogflowv2smartreplyanswer";


// GoogleCloudDialogflowV2SuggestSmartRepliesResponse
/** 
 * The response message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2SuggestSmartRepliesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @Metadata({ data: "json, name=smartReplyAnswers", elemType: shared.GoogleCloudDialogflowV2SmartReplyAnswer })
  smartReplyAnswers?: GoogleCloudDialogflowV2SmartReplyAnswer[];
}
