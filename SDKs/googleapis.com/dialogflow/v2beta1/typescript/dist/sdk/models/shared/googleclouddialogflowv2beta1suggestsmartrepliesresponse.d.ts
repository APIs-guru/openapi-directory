import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SmartReplyAnswer } from "./googleclouddialogflowv2beta1smartreplyanswer";
/**
 * The response message for Participants.SuggestSmartReplies.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse extends SpeakeasyBase {
    contextSize?: number;
    latestMessage?: string;
    smartReplyAnswers?: GoogleCloudDialogflowV2beta1SmartReplyAnswer[];
}
