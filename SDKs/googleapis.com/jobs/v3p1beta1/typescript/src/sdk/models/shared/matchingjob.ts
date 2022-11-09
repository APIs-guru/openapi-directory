import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommuteInfo } from "./commuteinfo";
import { Job } from "./job";


// MatchingJob
/** 
 * Output only. Job entry with metadata inside SearchJobsResponse.
**/
export class MatchingJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=commuteInfo" })
  commuteInfo?: CommuteInfo;

  @Metadata({ data: "json, name=job" })
  job?: Job;

  @Metadata({ data: "json, name=jobSummary" })
  jobSummary?: string;

  @Metadata({ data: "json, name=jobTitleSnippet" })
  jobTitleSnippet?: string;

  @Metadata({ data: "json, name=searchTextSnippet" })
  searchTextSnippet?: string;
}
