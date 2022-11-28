import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";



// GoogleCloudDialogflowCxV3ConversationTurnUserInput
/** 
 * The input from the human user.
**/
export class GoogleCloudDialogflowCxV3ConversationTurnUserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableSentimentAnalysis" })
  enableSentimentAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "json, name=injectedParameters" })
  injectedParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: GoogleCloudDialogflowCxV3QueryInput;

  @SpeakeasyMetadata({ data: "json, name=isWebhookEnabled" })
  isWebhookEnabled?: boolean;
}
