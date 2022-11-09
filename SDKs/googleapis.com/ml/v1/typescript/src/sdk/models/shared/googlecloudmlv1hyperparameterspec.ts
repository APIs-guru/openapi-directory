import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1ParameterSpec } from "./googlecloudmlv1parameterspec";

export enum GoogleCloudMlV1HyperparameterSpecAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED"
,    GridSearch = "GRID_SEARCH"
,    RandomSearch = "RANDOM_SEARCH"
}

export enum GoogleCloudMlV1HyperparameterSpecGoalEnum {
    GoalTypeUnspecified = "GOAL_TYPE_UNSPECIFIED"
,    Maximize = "MAXIMIZE"
,    Minimize = "MINIMIZE"
}


// GoogleCloudMlV1HyperparameterSpec
/** 
 * Represents a set of hyperparameters to optimize.
**/
export class GoogleCloudMlV1HyperparameterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: GoogleCloudMlV1HyperparameterSpecAlgorithmEnum;

  @Metadata({ data: "json, name=enableTrialEarlyStopping" })
  enableTrialEarlyStopping?: boolean;

  @Metadata({ data: "json, name=goal" })
  goal?: GoogleCloudMlV1HyperparameterSpecGoalEnum;

  @Metadata({ data: "json, name=hyperparameterMetricTag" })
  hyperparameterMetricTag?: string;

  @Metadata({ data: "json, name=maxFailedTrials" })
  maxFailedTrials?: number;

  @Metadata({ data: "json, name=maxParallelTrials" })
  maxParallelTrials?: number;

  @Metadata({ data: "json, name=maxTrials" })
  maxTrials?: number;

  @Metadata({ data: "json, name=params", elemType: shared.GoogleCloudMlV1ParameterSpec })
  params?: GoogleCloudMlV1ParameterSpec[];

  @Metadata({ data: "json, name=resumePreviousJobId" })
  resumePreviousJobId?: string;
}
