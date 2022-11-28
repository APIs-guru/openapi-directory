import { SpeakeasyBase } from "../../../internal/utils";
import { FailedLocation } from "./failedlocation";
import { Job } from "./job";
/**
 * Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    failedLocation?: FailedLocation[];
    jobs?: Job[];
    nextPageToken?: string;
}
