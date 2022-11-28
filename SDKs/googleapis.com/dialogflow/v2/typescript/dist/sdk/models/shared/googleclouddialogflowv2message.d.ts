import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2MessageAnnotation } from "./googleclouddialogflowv2messageannotation";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";
export declare enum GoogleCloudDialogflowV2MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * Represents a message posted into a conversation.
**/
export declare class GoogleCloudDialogflowV2Message extends SpeakeasyBase {
    content?: string;
    createTime?: string;
    languageCode?: string;
    messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
    name?: string;
    participant?: string;
    participantRole?: GoogleCloudDialogflowV2MessageParticipantRoleEnum;
    sendTime?: string;
    sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}
