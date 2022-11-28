import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentReply } from "./googleclouddialogflowv2beta1automatedagentreply";
import { GoogleCloudDialogflowV2beta1DtmfParameters } from "./googleclouddialogflowv2beta1dtmfparameters";
import { GoogleCloudDialogflowV2beta1SuggestionResult } from "./googleclouddialogflowv2beta1suggestionresult";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";
import { GoogleCloudDialogflowV2beta1OutputAudio } from "./googleclouddialogflowv2beta1outputaudio";
/**
 * The response message for Participants.AnalyzeContent.
**/
export declare class GoogleCloudDialogflowV2beta1AnalyzeContentResponse extends SpeakeasyBase {
    automatedAgentReply?: GoogleCloudDialogflowV2beta1AutomatedAgentReply;
    dtmfParameters?: GoogleCloudDialogflowV2beta1DtmfParameters;
    endUserSuggestionResults?: GoogleCloudDialogflowV2beta1SuggestionResult[];
    humanAgentSuggestionResults?: GoogleCloudDialogflowV2beta1SuggestionResult[];
    message?: GoogleCloudDialogflowV2beta1Message;
    replyAudio?: GoogleCloudDialogflowV2beta1OutputAudio;
    replyText?: string;
}
