import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1MessageAnnotation } from "./googleclouddialogflowv2beta1messageannotation";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";


export enum GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2beta1Message
/** 
 * Represents a message posted into a conversation.
**/
export class GoogleCloudDialogflowV2beta1Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=messageAnnotation" })
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participant" })
  participant?: string;

  @SpeakeasyMetadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=sendTime" })
  sendTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysis" })
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}


// GoogleCloudDialogflowV2beta1MessageInput
/** 
 * Represents a message posted into a conversation.
**/
export class GoogleCloudDialogflowV2beta1MessageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=messageAnnotation" })
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sendTime" })
  sendTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysis" })
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}
