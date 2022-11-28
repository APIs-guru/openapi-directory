import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";
/**
 * Status of the task execution (e.g. Jobs).
**/
export declare class GoogleCloudDataplexV1TaskExecutionStatus extends SpeakeasyBase {
    latestJob?: GoogleCloudDataplexV1Job;
    updateTime?: string;
}
