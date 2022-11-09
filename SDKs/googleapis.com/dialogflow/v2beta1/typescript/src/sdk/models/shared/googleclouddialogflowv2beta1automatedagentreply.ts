import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1DetectIntentResponse } from "./googleclouddialogflowv2beta1detectintentresponse";
import { GoogleCloudDialogflowV2beta1ResponseMessage } from "./googleclouddialogflowv2beta1responsemessage";

export enum GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
,    Partial = "PARTIAL"
,    Final = "FINAL"
}


// GoogleCloudDialogflowV2beta1AutomatedAgentReply
/** 
 * Represents a response from an automated agent.
**/
export class GoogleCloudDialogflowV2beta1AutomatedAgentReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @Metadata({ data: "json, name=automatedAgentReplyType" })
  automatedAgentReplyType?: GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum;

  @Metadata({ data: "json, name=cxSessionParameters" })
  cxSessionParameters?: Map<string, any>;

  @Metadata({ data: "json, name=detectIntentResponse" })
  detectIntentResponse?: GoogleCloudDialogflowV2beta1DetectIntentResponse;

  @Metadata({ data: "json, name=event" })
  event?: string;

  @Metadata({ data: "json, name=intent" })
  intent?: string;

  @Metadata({ data: "json, name=matchConfidence" })
  matchConfidence?: number;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=responseMessages", elemType: shared.GoogleCloudDialogflowV2beta1ResponseMessage })
  responseMessages?: GoogleCloudDialogflowV2beta1ResponseMessage[];
}
