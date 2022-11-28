import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SmartReplyAnswer } from "./googleclouddialogflowv2smartreplyanswer";
/**
 * The response message for Participants.SuggestSmartReplies.
**/
export declare class GoogleCloudDialogflowV2SuggestSmartRepliesResponse extends SpeakeasyBase {
    contextSize?: number;
    latestMessage?: string;
    smartReplyAnswers?: GoogleCloudDialogflowV2SmartReplyAnswer[];
}
