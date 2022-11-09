import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1TestRunDifference } from "./googleclouddialogflowcxv3beta1testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageText } from "./googleclouddialogflowcxv3beta1responsemessagetext";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";


// GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput
/** 
 * The output from the virtual agent.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;

  @Metadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @Metadata({ data: "json, name=differences", elemType: shared.GoogleCloudDialogflowCxV3beta1TestRunDifference })
  differences?: GoogleCloudDialogflowCxV3beta1TestRunDifference[];

  @Metadata({ data: "json, name=sessionParameters" })
  sessionParameters?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @Metadata({ data: "json, name=textResponses", elemType: shared.GoogleCloudDialogflowCxV3beta1ResponseMessageText })
  textResponses?: GoogleCloudDialogflowCxV3beta1ResponseMessageText[];

  @Metadata({ data: "json, name=triggeredIntent" })
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
}
