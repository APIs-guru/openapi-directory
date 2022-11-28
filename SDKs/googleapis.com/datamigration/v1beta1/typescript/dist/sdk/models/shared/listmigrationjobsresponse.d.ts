import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationJob } from "./migrationjob";
/**
 * Response message for 'ListMigrationJobs' request.
**/
export declare class ListMigrationJobsResponse extends SpeakeasyBase {
    migrationJobs?: MigrationJob[];
    nextPageToken?: string;
    unreachable?: string[];
}
