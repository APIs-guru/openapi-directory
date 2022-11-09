import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1PredictionInput } from "./googlecloudmlv1predictioninput";
import { GoogleCloudMlV1PredictionOutput } from "./googlecloudmlv1predictionoutput";
import { GoogleCloudMlV1TrainingInput } from "./googlecloudmlv1traininginput";
import { GoogleCloudMlV1TrainingOutput } from "./googlecloudmlv1trainingoutput";

export enum GoogleCloudMlV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Queued = "QUEUED"
,    Preparing = "PREPARING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
}


// GoogleCloudMlV1Job
/** 
 * Represents a training or prediction job.
**/
export class GoogleCloudMlV1Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=jobPosition" })
  jobPosition?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=predictionInput" })
  predictionInput?: GoogleCloudMlV1PredictionInput;

  @Metadata({ data: "json, name=predictionOutput" })
  predictionOutput?: GoogleCloudMlV1PredictionOutput;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1JobStateEnum;

  @Metadata({ data: "json, name=trainingInput" })
  trainingInput?: GoogleCloudMlV1TrainingInput;

  @Metadata({ data: "json, name=trainingOutput" })
  trainingOutput?: GoogleCloudMlV1TrainingOutput;
}
