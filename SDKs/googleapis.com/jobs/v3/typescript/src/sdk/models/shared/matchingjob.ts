import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommuteInfo } from "./commuteinfo";
import { Job } from "./job";



// MatchingJob
/** 
 * Output only. Job entry with metadata inside SearchJobsResponse.
**/
export class MatchingJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commuteInfo" })
  commuteInfo?: CommuteInfo;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;

  @SpeakeasyMetadata({ data: "json, name=jobSummary" })
  jobSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTitleSnippet" })
  jobTitleSnippet?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTextSnippet" })
  searchTextSnippet?: string;
}
