import { SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";
/**
 * ListJobRunsResponse is the response object returned by `ListJobRuns`.
**/
export declare class ListJobRunsResponse extends SpeakeasyBase {
    jobRuns?: JobRun[];
    nextPageToken?: string;
    unreachable?: string[];
}
