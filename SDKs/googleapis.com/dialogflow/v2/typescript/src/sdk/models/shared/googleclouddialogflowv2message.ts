import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2MessageAnnotation } from "./googleclouddialogflowv2messageannotation";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";

export enum GoogleCloudDialogflowV2MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2Message
/** 
 * Represents a message posted into a conversation.
**/
export class GoogleCloudDialogflowV2Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=messageAnnotation" })
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=participant" })
  participant?: string;

  @Metadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2MessageParticipantRoleEnum;

  @Metadata({ data: "json, name=sendTime" })
  sendTime?: string;

  @Metadata({ data: "json, name=sentimentAnalysis" })
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}
