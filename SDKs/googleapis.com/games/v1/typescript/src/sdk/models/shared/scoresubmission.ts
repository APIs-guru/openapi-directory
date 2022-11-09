import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScoreSubmission
/** 
 * A request to submit a score to leaderboards.
**/
export class ScoreSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=leaderboardId" })
  leaderboardId?: string;

  @Metadata({ data: "json, name=score" })
  score?: string;

  @Metadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
