import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LeaderboardScoreRank
/** 
 * A score rank in a leaderboard.
**/
export class LeaderboardScoreRank extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedNumScores" })
  formattedNumScores?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedRank" })
  formattedRank?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=numScores" })
  numScores?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: string;
}
