import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentTrainingPhrasePart } from "./googleclouddialogflowcxv3intenttrainingphrasepart";
/**
 * Represents an example that the agent is trained on to identify the intent.
**/
export declare class GoogleCloudDialogflowCxV3IntentTrainingPhrase extends SpeakeasyBase {
    id?: string;
    parts?: GoogleCloudDialogflowCxV3IntentTrainingPhrasePart[];
    repeatCount?: number;
}
