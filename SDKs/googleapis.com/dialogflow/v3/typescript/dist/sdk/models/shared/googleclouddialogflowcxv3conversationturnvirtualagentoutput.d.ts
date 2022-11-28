import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3TestRunDifference } from "./googleclouddialogflowcxv3testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3PageInput } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3ResponseMessageTextInput } from "./googleclouddialogflowcxv3responsemessagetext";
/**
 * The output from the virtual agent.
**/
export declare class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3Page;
    diagnosticInfo?: Map<string, any>;
    differences?: GoogleCloudDialogflowCxV3TestRunDifference[];
    sessionParameters?: Map<string, any>;
    status?: GoogleRpcStatus;
    textResponses?: GoogleCloudDialogflowCxV3ResponseMessageText[];
    triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}
/**
 * The output from the virtual agent.
**/
export declare class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3PageInput;
    diagnosticInfo?: Map<string, any>;
    sessionParameters?: Map<string, any>;
    status?: GoogleRpcStatus;
    textResponses?: GoogleCloudDialogflowCxV3ResponseMessageTextInput[];
    triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}
