import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CutoverJob } from "./cutoverjob";



// ListCutoverJobsResponse
/** 
 * Response message for 'ListCutoverJobs' request.
**/
export class ListCutoverJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cutoverJobs", elemType: CutoverJob })
  cutoverJobs?: CutoverJob[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
