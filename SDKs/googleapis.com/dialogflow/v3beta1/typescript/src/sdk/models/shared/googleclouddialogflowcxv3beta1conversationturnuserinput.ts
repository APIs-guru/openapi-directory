import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";



// GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput
/** 
 * The input from the human user.
**/
export class GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableSentimentAnalysis" })
  enableSentimentAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "json, name=injectedParameters" })
  injectedParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;

  @SpeakeasyMetadata({ data: "json, name=isWebhookEnabled" })
  isWebhookEnabled?: boolean;
}
