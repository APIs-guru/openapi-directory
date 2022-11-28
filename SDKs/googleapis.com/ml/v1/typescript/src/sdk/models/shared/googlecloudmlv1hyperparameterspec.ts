import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1ParameterSpec } from "./googlecloudmlv1parameterspec";


export enum GoogleCloudMlV1HyperparameterSpecAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED",
    GridSearch = "GRID_SEARCH",
    RandomSearch = "RANDOM_SEARCH"
}

export enum GoogleCloudMlV1HyperparameterSpecGoalEnum {
    GoalTypeUnspecified = "GOAL_TYPE_UNSPECIFIED",
    Maximize = "MAXIMIZE",
    Minimize = "MINIMIZE"
}


// GoogleCloudMlV1HyperparameterSpec
/** 
 * Represents a set of hyperparameters to optimize.
**/
export class GoogleCloudMlV1HyperparameterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: GoogleCloudMlV1HyperparameterSpecAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=enableTrialEarlyStopping" })
  enableTrialEarlyStopping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=goal" })
  goal?: GoogleCloudMlV1HyperparameterSpecGoalEnum;

  @SpeakeasyMetadata({ data: "json, name=hyperparameterMetricTag" })
  hyperparameterMetricTag?: string;

  @SpeakeasyMetadata({ data: "json, name=maxFailedTrials" })
  maxFailedTrials?: number;

  @SpeakeasyMetadata({ data: "json, name=maxParallelTrials" })
  maxParallelTrials?: number;

  @SpeakeasyMetadata({ data: "json, name=maxTrials" })
  maxTrials?: number;

  @SpeakeasyMetadata({ data: "json, name=params", elemType: GoogleCloudMlV1ParameterSpec })
  params?: GoogleCloudMlV1ParameterSpec[];

  @SpeakeasyMetadata({ data: "json, name=resumePreviousJobId" })
  resumePreviousJobId?: string;
}
