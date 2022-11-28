import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentDefinition } from "./googleclouddialogflowcxv3beta1experimentdefinition";
import { GoogleCloudDialogflowCxV3beta1ExperimentResult } from "./googleclouddialogflowcxv3beta1experimentresult";
import { GoogleCloudDialogflowCxV3beta1RolloutConfig } from "./googleclouddialogflowcxv3beta1rolloutconfig";
import { GoogleCloudDialogflowCxV3beta1RolloutState } from "./googleclouddialogflowcxv3beta1rolloutstate";
import { GoogleCloudDialogflowCxV3beta1VariantsHistory } from "./googleclouddialogflowcxv3beta1variantshistory";
export declare enum GoogleCloudDialogflowCxV3beta1ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Running = "RUNNING",
    Done = "DONE",
    RolloutFailed = "ROLLOUT_FAILED"
}
/**
 * Represents an experiment in an environment.
**/
export declare class GoogleCloudDialogflowCxV3beta1Experiment extends SpeakeasyBase {
    createTime?: string;
    definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;
    description?: string;
    displayName?: string;
    endTime?: string;
    experimentLength?: string;
    lastUpdateTime?: string;
    name?: string;
    result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;
    rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;
    rolloutFailureReason?: string;
    rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;
    startTime?: string;
    state?: GoogleCloudDialogflowCxV3beta1ExperimentStateEnum;
    variantsHistory?: GoogleCloudDialogflowCxV3beta1VariantsHistory[];
}
