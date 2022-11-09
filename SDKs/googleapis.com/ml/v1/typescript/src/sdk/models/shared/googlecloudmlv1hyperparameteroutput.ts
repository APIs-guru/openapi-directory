import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1HyperparameterOutputHyperparameterMetric } from "./googlecloudmlv1hyperparameteroutputhyperparametermetric";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutputHyperparameterMetric } from "./googlecloudmlv1hyperparameteroutputhyperparametermetric";

export enum GoogleCloudMlV1HyperparameterOutputStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Queued = "QUEUED"
,    Preparing = "PREPARING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
}


// GoogleCloudMlV1HyperparameterOutput
/** 
 * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
**/
export class GoogleCloudMlV1HyperparameterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=allMetrics", elemType: shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric })
  allMetrics?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[];

  @Metadata({ data: "json, name=builtInAlgorithmOutput" })
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=finalMetric" })
  finalMetric?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric;

  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: Map<string, string>;

  @Metadata({ data: "json, name=isTrialStoppedEarly" })
  isTrialStoppedEarly?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1HyperparameterOutputStateEnum;

  @Metadata({ data: "json, name=trialId" })
  trialId?: string;

  @Metadata({ data: "json, name=webAccessUris" })
  webAccessUris?: Map<string, string>;
}
