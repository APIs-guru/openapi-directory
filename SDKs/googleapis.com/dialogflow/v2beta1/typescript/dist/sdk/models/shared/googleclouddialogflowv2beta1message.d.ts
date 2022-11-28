import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1MessageAnnotation } from "./googleclouddialogflowv2beta1messageannotation";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";
export declare enum GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * Represents a message posted into a conversation.
**/
export declare class GoogleCloudDialogflowV2beta1Message extends SpeakeasyBase {
    content?: string;
    createTime?: string;
    languageCode?: string;
    messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
    name?: string;
    participant?: string;
    participantRole?: GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum;
    sendTime?: string;
    sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}
/**
 * Represents a message posted into a conversation.
**/
export declare class GoogleCloudDialogflowV2beta1MessageInput extends SpeakeasyBase {
    content?: string;
    languageCode?: string;
    messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
    name?: string;
    sendTime?: string;
    sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}
