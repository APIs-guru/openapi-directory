import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerLeaderboardScore } from "./playerleaderboardscore";
import { Player } from "./player";


// PlayerLeaderboardScoreListResponse
/** 
 * A list of player leaderboard scores.
**/
export class PlayerLeaderboardScoreListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PlayerLeaderboardScore })
  items?: PlayerLeaderboardScore[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=player" })
  player?: Player;
}
