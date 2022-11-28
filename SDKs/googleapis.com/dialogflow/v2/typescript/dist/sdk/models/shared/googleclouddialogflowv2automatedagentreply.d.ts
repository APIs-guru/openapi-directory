import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2DetectIntentResponse } from "./googleclouddialogflowv2detectintentresponse";
export declare enum GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * Represents a response from an automated agent.
**/
export declare class GoogleCloudDialogflowV2AutomatedAgentReply extends SpeakeasyBase {
    allowCancellation?: boolean;
    automatedAgentReplyType?: GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum;
    cxCurrentPage?: string;
    detectIntentResponse?: GoogleCloudDialogflowV2DetectIntentResponse;
}
