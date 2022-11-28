import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1PredictionInput } from "./googlecloudmlv1predictioninput";
import { GoogleCloudMlV1PredictionOutput } from "./googlecloudmlv1predictionoutput";
import { GoogleCloudMlV1TrainingInput } from "./googlecloudmlv1traininginput";
import { GoogleCloudMlV1TrainingOutputInput } from "./googlecloudmlv1trainingoutput";
import { GoogleCloudMlV1TrainingOutput } from "./googlecloudmlv1trainingoutput";
export declare enum GoogleCloudMlV1JobStateEnum {
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
 * Represents a training or prediction job.
**/
export declare class GoogleCloudMlV1JobInput extends SpeakeasyBase {
    createTime?: string;
    endTime?: string;
    errorMessage?: string;
    etag?: string;
    jobId?: string;
    labels?: Map<string, string>;
    predictionInput?: GoogleCloudMlV1PredictionInput;
    predictionOutput?: GoogleCloudMlV1PredictionOutput;
    startTime?: string;
    state?: GoogleCloudMlV1JobStateEnum;
    trainingInput?: GoogleCloudMlV1TrainingInput;
    trainingOutput?: GoogleCloudMlV1TrainingOutputInput;
}
/**
 * Represents a training or prediction job.
**/
export declare class GoogleCloudMlV1Job extends SpeakeasyBase {
    createTime?: string;
    endTime?: string;
    errorMessage?: string;
    etag?: string;
    jobId?: string;
    jobPosition?: string;
    labels?: Map<string, string>;
    predictionInput?: GoogleCloudMlV1PredictionInput;
    predictionOutput?: GoogleCloudMlV1PredictionOutput;
    startTime?: string;
    state?: GoogleCloudMlV1JobStateEnum;
    trainingInput?: GoogleCloudMlV1TrainingInput;
    trainingOutput?: GoogleCloudMlV1TrainingOutput;
}
