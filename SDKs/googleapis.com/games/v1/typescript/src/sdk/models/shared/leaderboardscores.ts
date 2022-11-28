import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardEntry } from "./leaderboardentry";



// LeaderboardScores
/** 
 * A ListScores response.
**/
export class LeaderboardScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: LeaderboardEntry })
  items?: LeaderboardEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=numScores" })
  numScores?: string;

  @SpeakeasyMetadata({ data: "json, name=playerScore" })
  playerScore?: LeaderboardEntry;

  @SpeakeasyMetadata({ data: "json, name=prevPageToken" })
  prevPageToken?: string;
}
