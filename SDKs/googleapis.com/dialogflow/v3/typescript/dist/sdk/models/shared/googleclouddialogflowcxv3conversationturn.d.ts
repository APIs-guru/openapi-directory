import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurnUserInput } from "./googleclouddialogflowcxv3conversationturnuserinput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export declare class GoogleCloudDialogflowCxV3ConversationTurnInput extends SpeakeasyBase {
    userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
    virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput;
}
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export declare class GoogleCloudDialogflowCxV3ConversationTurn extends SpeakeasyBase {
    userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
    virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}
