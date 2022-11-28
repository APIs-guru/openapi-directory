import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentDefinition } from "./googleclouddialogflowcxv3experimentdefinition";
import { GoogleCloudDialogflowCxV3ExperimentResult } from "./googleclouddialogflowcxv3experimentresult";
import { GoogleCloudDialogflowCxV3RolloutConfig } from "./googleclouddialogflowcxv3rolloutconfig";
import { GoogleCloudDialogflowCxV3RolloutState } from "./googleclouddialogflowcxv3rolloutstate";
import { GoogleCloudDialogflowCxV3VariantsHistory } from "./googleclouddialogflowcxv3variantshistory";
export declare enum GoogleCloudDialogflowCxV3ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Running = "RUNNING",
    Done = "DONE",
    RolloutFailed = "ROLLOUT_FAILED"
}
/**
 * Represents an experiment in an environment.
**/
export declare class GoogleCloudDialogflowCxV3Experiment extends SpeakeasyBase {
    createTime?: string;
    definition?: GoogleCloudDialogflowCxV3ExperimentDefinition;
    description?: string;
    displayName?: string;
    endTime?: string;
    experimentLength?: string;
    lastUpdateTime?: string;
    name?: string;
    result?: GoogleCloudDialogflowCxV3ExperimentResult;
    rolloutConfig?: GoogleCloudDialogflowCxV3RolloutConfig;
    rolloutFailureReason?: string;
    rolloutState?: GoogleCloudDialogflowCxV3RolloutState;
    startTime?: string;
    state?: GoogleCloudDialogflowCxV3ExperimentStateEnum;
    variantsHistory?: GoogleCloudDialogflowCxV3VariantsHistory[];
}
