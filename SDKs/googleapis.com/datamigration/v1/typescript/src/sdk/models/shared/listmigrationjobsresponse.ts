import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationJob } from "./migrationjob";



// ListMigrationJobsResponse
/** 
 * Response message for 'ListMigrationJobs' request.
**/
export class ListMigrationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migrationJobs", elemType: MigrationJob })
  migrationJobs?: MigrationJob[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
