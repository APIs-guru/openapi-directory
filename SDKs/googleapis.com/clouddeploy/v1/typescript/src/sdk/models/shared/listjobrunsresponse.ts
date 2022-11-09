import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobRun } from "./jobrun";


// ListJobRunsResponse
/** 
 * ListJobRunsResponse is the response object returned by `ListJobRuns`.
**/
export class ListJobRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobRuns", elemType: shared.JobRun })
  jobRuns?: JobRun[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
