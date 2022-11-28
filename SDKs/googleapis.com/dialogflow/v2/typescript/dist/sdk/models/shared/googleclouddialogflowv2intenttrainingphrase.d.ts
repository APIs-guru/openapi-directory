import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentTrainingPhrasePart } from "./googleclouddialogflowv2intenttrainingphrasepart";
export declare enum GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Example = "EXAMPLE",
    Template = "TEMPLATE"
}
/**
 * Represents an example that the agent is trained on.
**/
export declare class GoogleCloudDialogflowV2IntentTrainingPhrase extends SpeakeasyBase {
    name?: string;
    parts?: GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
    timesAddedCount?: number;
    type?: GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
}
