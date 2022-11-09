import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1Job } from "./googleclouddatapipelinesv1job";
/**
 * Response message for ListJobs
**/
export declare class GoogleCloudDatapipelinesV1ListJobsResponse extends SpeakeasyBase {
    jobs?: GoogleCloudDatapipelinesV1Job[];
    nextPageToken?: string;
}
