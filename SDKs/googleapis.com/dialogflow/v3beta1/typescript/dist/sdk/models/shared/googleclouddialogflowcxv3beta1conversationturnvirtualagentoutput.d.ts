import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1TestRunDifference } from "./googleclouddialogflowcxv3beta1testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageText } from "./googleclouddialogflowcxv3beta1responsemessagetext";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
import { GoogleCloudDialogflowCxV3beta1PageInput } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput } from "./googleclouddialogflowcxv3beta1responsemessagetext";
/**
 * The output from the virtual agent.
**/
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3beta1Page;
    diagnosticInfo?: Map<string, any>;
    differences?: GoogleCloudDialogflowCxV3beta1TestRunDifference[];
    sessionParameters?: Map<string, any>;
    status?: GoogleRpcStatus;
    textResponses?: GoogleCloudDialogflowCxV3beta1ResponseMessageText[];
    triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
}
/**
 * The output from the virtual agent.
**/
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3beta1PageInput;
    diagnosticInfo?: Map<string, any>;
    sessionParameters?: Map<string, any>;
    status?: GoogleRpcStatus;
    textResponses?: GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput[];
    triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
}
