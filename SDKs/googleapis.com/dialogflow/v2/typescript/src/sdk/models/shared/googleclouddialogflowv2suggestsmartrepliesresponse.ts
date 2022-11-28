import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SmartReplyAnswer } from "./googleclouddialogflowv2smartreplyanswer";



// GoogleCloudDialogflowV2SuggestSmartRepliesResponse
/** 
 * The response message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2SuggestSmartRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=smartReplyAnswers", elemType: GoogleCloudDialogflowV2SmartReplyAnswer })
  smartReplyAnswers?: GoogleCloudDialogflowV2SmartReplyAnswer[];
}
