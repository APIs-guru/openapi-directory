import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1ParameterSpec } from "./googlecloudmlv1parameterspec";
export declare enum GoogleCloudMlV1HyperparameterSpecAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED",
    GridSearch = "GRID_SEARCH",
    RandomSearch = "RANDOM_SEARCH"
}
export declare enum GoogleCloudMlV1HyperparameterSpecGoalEnum {
    GoalTypeUnspecified = "GOAL_TYPE_UNSPECIFIED",
    Maximize = "MAXIMIZE",
    Minimize = "MINIMIZE"
}
/**
 * Represents a set of hyperparameters to optimize.
**/
export declare class GoogleCloudMlV1HyperparameterSpec extends SpeakeasyBase {
    algorithm?: GoogleCloudMlV1HyperparameterSpecAlgorithmEnum;
    enableTrialEarlyStopping?: boolean;
    goal?: GoogleCloudMlV1HyperparameterSpecGoalEnum;
    hyperparameterMetricTag?: string;
    maxFailedTrials?: number;
    maxParallelTrials?: number;
    maxTrials?: number;
    params?: GoogleCloudMlV1ParameterSpec[];
    resumePreviousJobId?: string;
}
