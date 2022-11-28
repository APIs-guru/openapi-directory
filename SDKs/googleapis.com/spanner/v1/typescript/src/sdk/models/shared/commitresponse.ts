import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitStats } from "./commitstats";



// CommitResponse
/** 
 * The response for Commit.
**/
export class CommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitStats" })
  commitStats?: CommitStats;

  @SpeakeasyMetadata({ data: "json, name=commitTimestamp" })
  commitTimestamp?: string;
}
