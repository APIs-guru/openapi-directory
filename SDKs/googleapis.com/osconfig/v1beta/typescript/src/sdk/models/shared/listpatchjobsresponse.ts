import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchJob } from "./patchjob";



// ListPatchJobsResponse
/** 
 * A response message for listing patch jobs.
**/
export class ListPatchJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=patchJobs", elemType: PatchJob })
  patchJobs?: PatchJob[];
}
