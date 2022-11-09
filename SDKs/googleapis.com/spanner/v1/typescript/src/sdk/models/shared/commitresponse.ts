import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitStats } from "./commitstats";


// CommitResponse
/** 
 * The response for Commit.
**/
export class CommitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitStats" })
  commitStats?: CommitStats;

  @Metadata({ data: "json, name=commitTimestamp" })
  commitTimestamp?: string;
}
