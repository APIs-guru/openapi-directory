import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CutoverJob } from "./cutoverjob";


// ListCutoverJobsResponse
/** 
 * Response message for 'ListCutoverJobs' request.
**/
export class ListCutoverJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cutoverJobs", elemType: shared.CutoverJob })
  cutoverJobs?: CutoverJob[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
