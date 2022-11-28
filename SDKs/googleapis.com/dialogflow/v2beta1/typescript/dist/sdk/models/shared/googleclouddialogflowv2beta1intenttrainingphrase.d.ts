import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart } from "./googleclouddialogflowv2beta1intenttrainingphrasepart";
export declare enum GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Example = "EXAMPLE",
    Template = "TEMPLATE"
}
/**
 * Represents an example that the agent is trained on.
**/
export declare class GoogleCloudDialogflowV2beta1IntentTrainingPhrase extends SpeakeasyBase {
    name?: string;
    parts?: GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
    timesAddedCount?: number;
    type?: GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
}
