import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloneJob } from "./clonejob";


// ListCloneJobsResponse
/** 
 * Response message for 'ListCloneJobs' request.
**/
export class ListCloneJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloneJobs", elemType: shared.CloneJob })
  cloneJobs?: CloneJob[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
