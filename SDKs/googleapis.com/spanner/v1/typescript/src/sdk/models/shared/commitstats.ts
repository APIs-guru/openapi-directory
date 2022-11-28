import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommitStats
/** 
 * Additional statistics about a commit.
**/
export class CommitStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mutationCount" })
  mutationCount?: string;
}
