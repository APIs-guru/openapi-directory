import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";



// ListJobRunsResponse
/** 
 * ListJobRunsResponse is the response object returned by `ListJobRuns`.
**/
export class ListJobRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobRuns", elemType: JobRun })
  jobRuns?: JobRun[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
