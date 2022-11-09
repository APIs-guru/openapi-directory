import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";


// GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput
/** 
 * The input from the human user.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableSentimentAnalysis" })
  enableSentimentAnalysis?: boolean;

  @Metadata({ data: "json, name=injectedParameters" })
  injectedParameters?: Map<string, any>;

  @Metadata({ data: "json, name=input" })
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;

  @Metadata({ data: "json, name=isWebhookEnabled" })
  isWebhookEnabled?: boolean;
}
