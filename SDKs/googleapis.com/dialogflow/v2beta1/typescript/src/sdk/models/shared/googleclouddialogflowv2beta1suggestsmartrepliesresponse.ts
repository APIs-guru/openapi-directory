import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1SmartReplyAnswer } from "./googleclouddialogflowv2beta1smartreplyanswer";


// GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse
/** 
 * The response message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @Metadata({ data: "json, name=smartReplyAnswers", elemType: shared.GoogleCloudDialogflowV2beta1SmartReplyAnswer })
  smartReplyAnswers?: GoogleCloudDialogflowV2beta1SmartReplyAnswer[];
}
