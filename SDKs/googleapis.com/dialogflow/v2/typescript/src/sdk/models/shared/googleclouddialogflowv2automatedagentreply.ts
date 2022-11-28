import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2DetectIntentResponse } from "./googleclouddialogflowv2detectintentresponse";


export enum GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}


// GoogleCloudDialogflowV2AutomatedAgentReply
/** 
 * Represents a response from an automated agent.
**/
export class GoogleCloudDialogflowV2AutomatedAgentReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automatedAgentReplyType" })
  automatedAgentReplyType?: GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cxCurrentPage" })
  cxCurrentPage?: string;

  @SpeakeasyMetadata({ data: "json, name=detectIntentResponse" })
  detectIntentResponse?: GoogleCloudDialogflowV2DetectIntentResponse;
}
