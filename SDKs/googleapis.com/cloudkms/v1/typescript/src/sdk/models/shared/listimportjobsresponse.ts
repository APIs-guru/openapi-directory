import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJob } from "./importjob";



// ListImportJobsResponse
/** 
 * Response message for KeyManagementService.ListImportJobs.
**/
export class ListImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importJobs", elemType: ImportJob })
  importJobs?: ImportJob[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
