import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Job } from "./googlecloudmlv1job";
/**
 * Response message for the ListJobs method.
**/
export declare class GoogleCloudMlV1ListJobsResponse extends SpeakeasyBase {
    jobs?: GoogleCloudMlV1Job[];
    nextPageToken?: string;
}
