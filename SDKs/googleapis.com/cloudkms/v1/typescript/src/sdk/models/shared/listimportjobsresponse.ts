import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportJob } from "./importjob";


// ListImportJobsResponse
/** 
 * Response message for KeyManagementService.ListImportJobs.
**/
export class ListImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=importJobs", elemType: shared.ImportJob })
  importJobs?: ImportJob[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
