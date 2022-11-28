import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart } from "./googleclouddialogflowcxv3beta1intenttrainingphrasepart";
/**
 * Represents an example that the agent is trained on to identify the intent.
**/
export declare class GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase extends SpeakeasyBase {
    id?: string;
    parts?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart[];
    repeatCount?: number;
}
