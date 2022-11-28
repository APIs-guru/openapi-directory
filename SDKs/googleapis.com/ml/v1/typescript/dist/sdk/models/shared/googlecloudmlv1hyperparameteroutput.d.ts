import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1HyperparameterOutputHyperparameterMetric } from "./googlecloudmlv1hyperparameteroutputhyperparametermetric";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
export declare enum GoogleCloudMlV1HyperparameterOutputStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Preparing = "PREPARING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED"
}
/**
 * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
**/
export declare class GoogleCloudMlV1HyperparameterOutput extends SpeakeasyBase {
    allMetrics?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[];
    builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;
    endTime?: string;
    finalMetric?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric;
    hyperparameters?: Map<string, string>;
    isTrialStoppedEarly?: boolean;
    startTime?: string;
    state?: GoogleCloudMlV1HyperparameterOutputStateEnum;
    trialId?: string;
    webAccessUris?: Map<string, string>;
}
