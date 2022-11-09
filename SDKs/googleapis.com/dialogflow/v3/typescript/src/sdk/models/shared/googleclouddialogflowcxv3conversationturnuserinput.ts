import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";


// GoogleCloudDialogflowCxV3ConversationTurnUserInput
/** 
 * The input from the human user.
**/
export class GoogleCloudDialogflowCxV3ConversationTurnUserInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableSentimentAnalysis" })
  enableSentimentAnalysis?: boolean;

  @Metadata({ data: "json, name=injectedParameters" })
  injectedParameters?: Map<string, any>;

  @Metadata({ data: "json, name=input" })
  input?: GoogleCloudDialogflowCxV3QueryInput;

  @Metadata({ data: "json, name=isWebhookEnabled" })
  isWebhookEnabled?: boolean;
}
