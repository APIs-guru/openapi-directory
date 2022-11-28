import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurnUserInput } from "./googleclouddialogflowcxv3conversationturnuserinput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";



// GoogleCloudDialogflowCxV3ConversationTurnInput
/** 
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export class GoogleCloudDialogflowCxV3ConversationTurnInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userInput" })
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;

  @SpeakeasyMetadata({ data: "json, name=virtualAgentOutput" })
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput;
}


// GoogleCloudDialogflowCxV3ConversationTurn
/** 
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export class GoogleCloudDialogflowCxV3ConversationTurn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userInput" })
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;

  @SpeakeasyMetadata({ data: "json, name=virtualAgentOutput" })
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}
