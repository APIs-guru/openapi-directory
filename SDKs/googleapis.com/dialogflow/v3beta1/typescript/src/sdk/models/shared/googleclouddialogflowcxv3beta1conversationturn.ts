import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput } from "./googleclouddialogflowcxv3beta1conversationturnuserinput";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput } from "./googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput";



// GoogleCloudDialogflowCxV3beta1ConversationTurnInput
/** 
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurnInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userInput" })
  userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;

  @SpeakeasyMetadata({ data: "json, name=virtualAgentOutput" })
  virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput;
}


// GoogleCloudDialogflowCxV3beta1ConversationTurn
/** 
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userInput" })
  userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;

  @SpeakeasyMetadata({ data: "json, name=virtualAgentOutput" })
  virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
}
