import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentReply } from "./googleclouddialogflowv2beta1automatedagentreply";
import { GoogleCloudDialogflowV2beta1DtmfParameters } from "./googleclouddialogflowv2beta1dtmfparameters";
import { GoogleCloudDialogflowV2beta1SuggestionResult } from "./googleclouddialogflowv2beta1suggestionresult";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";
import { GoogleCloudDialogflowV2beta1OutputAudio } from "./googleclouddialogflowv2beta1outputaudio";



// GoogleCloudDialogflowV2beta1AnalyzeContentResponse
/** 
 * The response message for Participants.AnalyzeContent.
**/
export class GoogleCloudDialogflowV2beta1AnalyzeContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatedAgentReply" })
  automatedAgentReply?: GoogleCloudDialogflowV2beta1AutomatedAgentReply;

  @SpeakeasyMetadata({ data: "json, name=dtmfParameters" })
  dtmfParameters?: GoogleCloudDialogflowV2beta1DtmfParameters;

  @SpeakeasyMetadata({ data: "json, name=endUserSuggestionResults", elemType: GoogleCloudDialogflowV2beta1SuggestionResult })
  endUserSuggestionResults?: GoogleCloudDialogflowV2beta1SuggestionResult[];

  @SpeakeasyMetadata({ data: "json, name=humanAgentSuggestionResults", elemType: GoogleCloudDialogflowV2beta1SuggestionResult })
  humanAgentSuggestionResults?: GoogleCloudDialogflowV2beta1SuggestionResult[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowV2beta1Message;

  @SpeakeasyMetadata({ data: "json, name=replyAudio" })
  replyAudio?: GoogleCloudDialogflowV2beta1OutputAudio;

  @SpeakeasyMetadata({ data: "json, name=replyText" })
  replyText?: string;
}
