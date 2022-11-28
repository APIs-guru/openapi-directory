import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1DetectIntentResponse } from "./googleclouddialogflowv2beta1detectintentresponse";
import { GoogleCloudDialogflowV2beta1ResponseMessage } from "./googleclouddialogflowv2beta1responsemessage";


export enum GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}


// GoogleCloudDialogflowV2beta1AutomatedAgentReply
/** 
 * Represents a response from an automated agent.
**/
export class GoogleCloudDialogflowV2beta1AutomatedAgentReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automatedAgentReplyType" })
  automatedAgentReplyType?: GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cxCurrentPage" })
  cxCurrentPage?: string;

  @SpeakeasyMetadata({ data: "json, name=cxSessionParameters" })
  cxSessionParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=detectIntentResponse" })
  detectIntentResponse?: GoogleCloudDialogflowV2beta1DetectIntentResponse;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;

  @SpeakeasyMetadata({ data: "json, name=matchConfidence" })
  matchConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=responseMessages", elemType: GoogleCloudDialogflowV2beta1ResponseMessage })
  responseMessages?: GoogleCloudDialogflowV2beta1ResponseMessage[];
}
