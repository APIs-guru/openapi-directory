import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Response message for ReportingService.ListJobs.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextPageToken?: string;
}
