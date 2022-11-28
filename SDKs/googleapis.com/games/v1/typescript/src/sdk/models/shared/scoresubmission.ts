import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreSubmission
/** 
 * A request to submit a score to leaderboards.
**/
export class ScoreSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=leaderboardId" })
  leaderboardId?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
