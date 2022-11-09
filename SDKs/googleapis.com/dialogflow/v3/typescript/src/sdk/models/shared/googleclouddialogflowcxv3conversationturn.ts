import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3ConversationTurnUserInput } from "./googleclouddialogflowcxv3conversationturnuserinput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";


// GoogleCloudDialogflowCxV3ConversationTurn
/** 
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
export class GoogleCloudDialogflowCxV3ConversationTurn extends SpeakeasyBase {
  @Metadata({ data: "json, name=userInput" })
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;

  @Metadata({ data: "json, name=virtualAgentOutput" })
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}
