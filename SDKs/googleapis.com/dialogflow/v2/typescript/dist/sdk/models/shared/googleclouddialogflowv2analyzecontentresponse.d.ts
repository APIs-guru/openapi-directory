import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AutomatedAgentReply } from "./googleclouddialogflowv2automatedagentreply";
import { GoogleCloudDialogflowV2DtmfParameters } from "./googleclouddialogflowv2dtmfparameters";
import { GoogleCloudDialogflowV2SuggestionResult } from "./googleclouddialogflowv2suggestionresult";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";
import { GoogleCloudDialogflowV2OutputAudio } from "./googleclouddialogflowv2outputaudio";
/**
 * The response message for Participants.AnalyzeContent.
**/
export declare class GoogleCloudDialogflowV2AnalyzeContentResponse extends SpeakeasyBase {
    automatedAgentReply?: GoogleCloudDialogflowV2AutomatedAgentReply;
    dtmfParameters?: GoogleCloudDialogflowV2DtmfParameters;
    endUserSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];
    humanAgentSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];
    message?: GoogleCloudDialogflowV2Message;
    replyAudio?: GoogleCloudDialogflowV2OutputAudio;
    replyText?: string;
}
