import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
/**
 * The input from the human user.
**/
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput extends SpeakeasyBase {
    enableSentimentAnalysis?: boolean;
    injectedParameters?: Map<string, any>;
    input?: GoogleCloudDialogflowCxV3beta1QueryInput;
    isWebhookEnabled?: boolean;
}
