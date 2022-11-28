import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJob } from "./importjob";
/**
 * Response message for KeyManagementService.ListImportJobs.
**/
export declare class ListImportJobsResponse extends SpeakeasyBase {
    importJobs?: ImportJob[];
    nextPageToken?: string;
    totalSize?: number;
}
