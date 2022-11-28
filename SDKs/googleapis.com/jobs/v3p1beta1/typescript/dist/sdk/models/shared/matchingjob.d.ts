import { SpeakeasyBase } from "../../../internal/utils";
import { CommuteInfo } from "./commuteinfo";
import { Job } from "./job";
/**
 * Output only. Job entry with metadata inside SearchJobsResponse.
**/
export declare class MatchingJob extends SpeakeasyBase {
    commuteInfo?: CommuteInfo;
    job?: Job;
    jobSummary?: string;
    jobTitleSnippet?: string;
    searchTextSnippet?: string;
}
