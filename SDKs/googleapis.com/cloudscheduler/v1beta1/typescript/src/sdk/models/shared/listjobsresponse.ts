import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// ListJobsResponse
/** 
 * Response message for listing jobs using ListJobs.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Job })
  jobs?: Job[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
