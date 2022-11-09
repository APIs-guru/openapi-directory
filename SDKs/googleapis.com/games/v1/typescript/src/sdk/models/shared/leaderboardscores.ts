import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LeaderboardEntry } from "./leaderboardentry";
import { LeaderboardEntry } from "./leaderboardentry";


// LeaderboardScores
/** 
 * A ListScores response.
**/
export class LeaderboardScores extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.LeaderboardEntry })
  items?: LeaderboardEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=numScores" })
  numScores?: string;

  @Metadata({ data: "json, name=playerScore" })
  playerScore?: LeaderboardEntry;

  @Metadata({ data: "json, name=prevPageToken" })
  prevPageToken?: string;
}
