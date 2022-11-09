import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2AutomatedAgentReply } from "./googleclouddialogflowv2automatedagentreply";
import { GoogleCloudDialogflowV2DtmfParameters } from "./googleclouddialogflowv2dtmfparameters";
import { GoogleCloudDialogflowV2SuggestionResult } from "./googleclouddialogflowv2suggestionresult";
import { GoogleCloudDialogflowV2SuggestionResult } from "./googleclouddialogflowv2suggestionresult";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";
import { GoogleCloudDialogflowV2OutputAudio } from "./googleclouddialogflowv2outputaudio";


// GoogleCloudDialogflowV2AnalyzeContentResponse
/** 
 * The response message for Participants.AnalyzeContent.
**/
export class GoogleCloudDialogflowV2AnalyzeContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatedAgentReply" })
  automatedAgentReply?: GoogleCloudDialogflowV2AutomatedAgentReply;

  @Metadata({ data: "json, name=dtmfParameters" })
  dtmfParameters?: GoogleCloudDialogflowV2DtmfParameters;

  @Metadata({ data: "json, name=endUserSuggestionResults", elemType: shared.GoogleCloudDialogflowV2SuggestionResult })
  endUserSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];

  @Metadata({ data: "json, name=humanAgentSuggestionResults", elemType: shared.GoogleCloudDialogflowV2SuggestionResult })
  humanAgentSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];

  @Metadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowV2Message;

  @Metadata({ data: "json, name=replyAudio" })
  replyAudio?: GoogleCloudDialogflowV2OutputAudio;

  @Metadata({ data: "json, name=replyText" })
  replyText?: string;
}
