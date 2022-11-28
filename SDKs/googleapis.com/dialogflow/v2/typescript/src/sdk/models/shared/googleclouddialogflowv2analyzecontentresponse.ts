import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AutomatedAgentReply } from "./googleclouddialogflowv2automatedagentreply";
import { GoogleCloudDialogflowV2DtmfParameters } from "./googleclouddialogflowv2dtmfparameters";
import { GoogleCloudDialogflowV2SuggestionResult } from "./googleclouddialogflowv2suggestionresult";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";
import { GoogleCloudDialogflowV2OutputAudio } from "./googleclouddialogflowv2outputaudio";



// GoogleCloudDialogflowV2AnalyzeContentResponse
/** 
 * The response message for Participants.AnalyzeContent.
**/
export class GoogleCloudDialogflowV2AnalyzeContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatedAgentReply" })
  automatedAgentReply?: GoogleCloudDialogflowV2AutomatedAgentReply;

  @SpeakeasyMetadata({ data: "json, name=dtmfParameters" })
  dtmfParameters?: GoogleCloudDialogflowV2DtmfParameters;

  @SpeakeasyMetadata({ data: "json, name=endUserSuggestionResults", elemType: GoogleCloudDialogflowV2SuggestionResult })
  endUserSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];

  @SpeakeasyMetadata({ data: "json, name=humanAgentSuggestionResults", elemType: GoogleCloudDialogflowV2SuggestionResult })
  humanAgentSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowV2Message;

  @SpeakeasyMetadata({ data: "json, name=replyAudio" })
  replyAudio?: GoogleCloudDialogflowV2OutputAudio;

  @SpeakeasyMetadata({ data: "json, name=replyText" })
  replyText?: string;
}
