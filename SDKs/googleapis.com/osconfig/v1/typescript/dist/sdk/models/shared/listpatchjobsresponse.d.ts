import { SpeakeasyBase } from "../../../internal/utils";
import { PatchJob } from "./patchjob";
/**
 * A response message for listing patch jobs.
**/
export declare class ListPatchJobsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    patchJobs?: PatchJob[];
}
