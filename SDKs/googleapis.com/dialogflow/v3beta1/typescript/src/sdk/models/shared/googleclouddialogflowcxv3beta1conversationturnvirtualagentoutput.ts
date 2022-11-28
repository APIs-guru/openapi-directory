import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1TestRunDifference } from "./googleclouddialogflowcxv3beta1testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageText } from "./googleclouddialogflowcxv3beta1responsemessagetext";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
import { GoogleCloudDialogflowCxV3beta1PageInput } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput } from "./googleclouddialogflowcxv3beta1responsemessagetext";



// GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput
/** 
 * The output from the virtual agent.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=differences", elemType: GoogleCloudDialogflowCxV3beta1TestRunDifference })
  differences?: GoogleCloudDialogflowCxV3beta1TestRunDifference[];

  @SpeakeasyMetadata({ data: "json, name=sessionParameters" })
  sessionParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessageText })
  textResponses?: GoogleCloudDialogflowCxV3beta1ResponseMessageText[];

  @SpeakeasyMetadata({ data: "json, name=triggeredIntent" })
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
}


// GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput
/** 
 * The output from the virtual agent.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1PageInput;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sessionParameters" })
  sessionParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput })
  textResponses?: GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput[];

  @SpeakeasyMetadata({ data: "json, name=triggeredIntent" })
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
}
