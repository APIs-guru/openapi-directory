import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1DetectIntentResponse } from "./googleclouddialogflowv2beta1detectintentresponse";
import { GoogleCloudDialogflowV2beta1ResponseMessage } from "./googleclouddialogflowv2beta1responsemessage";
export declare enum GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * Represents a response from an automated agent.
**/
export declare class GoogleCloudDialogflowV2beta1AutomatedAgentReply extends SpeakeasyBase {
    allowCancellation?: boolean;
    automatedAgentReplyType?: GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum;
    cxCurrentPage?: string;
    cxSessionParameters?: Map<string, any>;
    detectIntentResponse?: GoogleCloudDialogflowV2beta1DetectIntentResponse;
    event?: string;
    intent?: string;
    matchConfidence?: number;
    parameters?: Map<string, any>;
    responseMessages?: GoogleCloudDialogflowV2beta1ResponseMessage[];
}
