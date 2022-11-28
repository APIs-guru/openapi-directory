import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentParameter } from "./googleclouddialogflowcxv3intentparameter";
import { GoogleCloudDialogflowCxV3IntentTrainingPhrase } from "./googleclouddialogflowcxv3intenttrainingphrase";
/**
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
**/
export declare class GoogleCloudDialogflowCxV3Intent extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    isFallback?: boolean;
    labels?: Map<string, string>;
    name?: string;
    parameters?: GoogleCloudDialogflowCxV3IntentParameter[];
    priority?: number;
    trainingPhrases?: GoogleCloudDialogflowCxV3IntentTrainingPhrase[];
}
