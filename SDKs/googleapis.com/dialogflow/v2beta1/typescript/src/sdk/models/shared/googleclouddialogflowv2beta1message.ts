import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1MessageAnnotation } from "./googleclouddialogflowv2beta1messageannotation";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";

export enum GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2beta1Message
/** 
 * Represents a message posted into a conversation.
**/
export class GoogleCloudDialogflowV2beta1Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=messageAnnotation" })
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=participant" })
  participant?: string;

  @Metadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum;

  @Metadata({ data: "json, name=sendTime" })
  sendTime?: string;

  @Metadata({ data: "json, name=sentimentAnalysis" })
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}
