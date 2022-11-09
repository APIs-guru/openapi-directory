import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3TestRunDifference } from "./googleclouddialogflowcxv3testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";


// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput
/** 
 * The output from the virtual agent.
**/
export class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3Page;

  @Metadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @Metadata({ data: "json, name=differences", elemType: shared.GoogleCloudDialogflowCxV3TestRunDifference })
  differences?: GoogleCloudDialogflowCxV3TestRunDifference[];

  @Metadata({ data: "json, name=sessionParameters" })
  sessionParameters?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @Metadata({ data: "json, name=textResponses", elemType: shared.GoogleCloudDialogflowCxV3ResponseMessageText })
  textResponses?: GoogleCloudDialogflowCxV3ResponseMessageText[];

  @Metadata({ data: "json, name=triggeredIntent" })
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}
