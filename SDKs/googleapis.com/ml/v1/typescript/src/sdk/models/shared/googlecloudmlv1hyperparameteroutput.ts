import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1HyperparameterOutputHyperparameterMetric } from "./googlecloudmlv1hyperparameteroutputhyperparametermetric";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";


export enum GoogleCloudMlV1HyperparameterOutputStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Preparing = "PREPARING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED"
}


// GoogleCloudMlV1HyperparameterOutput
/** 
 * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
**/
export class GoogleCloudMlV1HyperparameterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allMetrics", elemType: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric })
  allMetrics?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[];

  @SpeakeasyMetadata({ data: "json, name=builtInAlgorithmOutput" })
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=finalMetric" })
  finalMetric?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric;

  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=isTrialStoppedEarly" })
  isTrialStoppedEarly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1HyperparameterOutputStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trialId" })
  trialId?: string;

  @SpeakeasyMetadata({ data: "json, name=webAccessUris" })
  webAccessUris?: Map<string, string>;
}
