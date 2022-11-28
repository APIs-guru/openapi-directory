import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloneJob } from "./clonejob";



// ListCloneJobsResponse
/** 
 * Response message for 'ListCloneJobs' request.
**/
export class ListCloneJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloneJobs", elemType: CloneJob })
  cloneJobs?: CloneJob[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
