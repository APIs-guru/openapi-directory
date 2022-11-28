import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
/**
 * The input from the human user.
**/
export declare class GoogleCloudDialogflowCxV3ConversationTurnUserInput extends SpeakeasyBase {
    enableSentimentAnalysis?: boolean;
    injectedParameters?: Map<string, any>;
    input?: GoogleCloudDialogflowCxV3QueryInput;
    isWebhookEnabled?: boolean;
}
