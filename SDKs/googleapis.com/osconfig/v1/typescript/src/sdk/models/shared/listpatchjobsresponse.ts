import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchJob } from "./patchjob";


// ListPatchJobsResponse
/** 
 * A response message for listing patch jobs.
**/
export class ListPatchJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=patchJobs", elemType: shared.PatchJob })
  patchJobs?: PatchJob[];
}
