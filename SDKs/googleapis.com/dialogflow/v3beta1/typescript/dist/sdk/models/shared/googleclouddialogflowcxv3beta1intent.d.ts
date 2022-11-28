import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentParameter } from "./googleclouddialogflowcxv3beta1intentparameter";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase } from "./googleclouddialogflowcxv3beta1intenttrainingphrase";
/**
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
**/
export declare class GoogleCloudDialogflowCxV3beta1Intent extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    isFallback?: boolean;
    labels?: Map<string, string>;
    name?: string;
    parameters?: GoogleCloudDialogflowCxV3beta1IntentParameter[];
    priority?: number;
    trainingPhrases?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase[];
}
