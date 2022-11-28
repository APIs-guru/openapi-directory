import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput } from "./googleclouddialogflowcxv3beta1conversationturnuserinput";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput } from "./googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput";
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurnInput extends SpeakeasyBase {
    userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
    virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput;
}
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurn extends SpeakeasyBase {
    userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
    virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
}
