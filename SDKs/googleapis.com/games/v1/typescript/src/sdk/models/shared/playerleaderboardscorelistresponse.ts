import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerLeaderboardScore } from "./playerleaderboardscore";
import { Player } from "./player";



// PlayerLeaderboardScoreListResponse
/** 
 * A list of player leaderboard scores.
**/
export class PlayerLeaderboardScoreListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlayerLeaderboardScore })
  items?: PlayerLeaderboardScore[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: Player;
}
