import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SmartReplyAnswer } from "./googleclouddialogflowv2beta1smartreplyanswer";



// GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse
/** 
 * The response message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=smartReplyAnswers", elemType: GoogleCloudDialogflowV2beta1SmartReplyAnswer })
  smartReplyAnswers?: GoogleCloudDialogflowV2beta1SmartReplyAnswer[];
}
