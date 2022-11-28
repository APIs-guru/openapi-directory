import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2MessageAnnotation } from "./googleclouddialogflowv2messageannotation";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";


export enum GoogleCloudDialogflowV2MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2Message
/** 
 * Represents a message posted into a conversation.
**/
export class GoogleCloudDialogflowV2Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=messageAnnotation" })
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participant" })
  participant?: string;

  @SpeakeasyMetadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2MessageParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=sendTime" })
  sendTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysis" })
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}
