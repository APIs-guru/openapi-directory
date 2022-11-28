import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1PredictionInput } from "./googlecloudmlv1predictioninput";
import { GoogleCloudMlV1PredictionOutput } from "./googlecloudmlv1predictionoutput";
import { GoogleCloudMlV1TrainingInput } from "./googlecloudmlv1traininginput";
import { GoogleCloudMlV1TrainingOutputInput } from "./googlecloudmlv1trainingoutput";
import { GoogleCloudMlV1TrainingOutput } from "./googlecloudmlv1trainingoutput";


export enum GoogleCloudMlV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Preparing = "PREPARING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED"
}


// GoogleCloudMlV1JobInput
/** 
 * Represents a training or prediction job.
**/
export class GoogleCloudMlV1JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=predictionInput" })
  predictionInput?: GoogleCloudMlV1PredictionInput;

  @SpeakeasyMetadata({ data: "json, name=predictionOutput" })
  predictionOutput?: GoogleCloudMlV1PredictionOutput;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingInput" })
  trainingInput?: GoogleCloudMlV1TrainingInput;

  @SpeakeasyMetadata({ data: "json, name=trainingOutput" })
  trainingOutput?: GoogleCloudMlV1TrainingOutputInput;
}


// GoogleCloudMlV1Job
/** 
 * Represents a training or prediction job.
**/
export class GoogleCloudMlV1Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=jobPosition" })
  jobPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=predictionInput" })
  predictionInput?: GoogleCloudMlV1PredictionInput;

  @SpeakeasyMetadata({ data: "json, name=predictionOutput" })
  predictionOutput?: GoogleCloudMlV1PredictionOutput;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingInput" })
  trainingInput?: GoogleCloudMlV1TrainingInput;

  @SpeakeasyMetadata({ data: "json, name=trainingOutput" })
  trainingOutput?: GoogleCloudMlV1TrainingOutput;
}
