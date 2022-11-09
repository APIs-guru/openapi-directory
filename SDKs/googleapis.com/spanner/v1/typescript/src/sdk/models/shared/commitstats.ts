import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommitStats
/** 
 * Additional statistics about a commit.
**/
export class CommitStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=mutationCount" })
  mutationCount?: string;
}
