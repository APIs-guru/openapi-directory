import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";
/**
 * List jobs response.
**/
export declare class GoogleCloudDataplexV1ListJobsResponse extends SpeakeasyBase {
    jobs?: GoogleCloudDataplexV1Job[];
    nextPageToken?: string;
}
