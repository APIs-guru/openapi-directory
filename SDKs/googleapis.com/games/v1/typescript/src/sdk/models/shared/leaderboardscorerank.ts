import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LeaderboardScoreRank
/** 
 * A score rank in a leaderboard.
**/
export class LeaderboardScoreRank extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedNumScores" })
  formattedNumScores?: string;

  @Metadata({ data: "json, name=formattedRank" })
  formattedRank?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=numScores" })
  numScores?: string;

  @Metadata({ data: "json, name=rank" })
  rank?: string;
}
