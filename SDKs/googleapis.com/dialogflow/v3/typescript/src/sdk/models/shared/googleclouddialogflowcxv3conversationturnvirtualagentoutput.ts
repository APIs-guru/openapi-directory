import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3TestRunDifference } from "./googleclouddialogflowcxv3testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3PageInput } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3ResponseMessageTextInput } from "./googleclouddialogflowcxv3responsemessagetext";



// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput
/** 
 * The output from the virtual agent.
**/
export class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3Page;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=differences", elemType: GoogleCloudDialogflowCxV3TestRunDifference })
  differences?: GoogleCloudDialogflowCxV3TestRunDifference[];

  @SpeakeasyMetadata({ data: "json, name=sessionParameters" })
  sessionParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3ResponseMessageText })
  textResponses?: GoogleCloudDialogflowCxV3ResponseMessageText[];

  @SpeakeasyMetadata({ data: "json, name=triggeredIntent" })
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}


// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput
/** 
 * The output from the virtual agent.
**/
export class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3PageInput;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sessionParameters" })
  sessionParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3ResponseMessageTextInput })
  textResponses?: GoogleCloudDialogflowCxV3ResponseMessageTextInput[];

  @SpeakeasyMetadata({ data: "json, name=triggeredIntent" })
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}
