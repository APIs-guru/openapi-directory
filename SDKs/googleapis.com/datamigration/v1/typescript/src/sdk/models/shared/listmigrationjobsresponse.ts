import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MigrationJob } from "./migrationjob";


// ListMigrationJobsResponse
/** 
 * Response message for 'ListMigrationJobs' request.
**/
export class ListMigrationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=migrationJobs", elemType: shared.MigrationJob })
  migrationJobs?: MigrationJob[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
