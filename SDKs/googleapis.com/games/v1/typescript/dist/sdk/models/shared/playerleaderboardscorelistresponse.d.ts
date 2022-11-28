import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerLeaderboardScore } from "./playerleaderboardscore";
import { Player } from "./player";
/**
 * A list of player leaderboard scores.
**/
export declare class PlayerLeaderboardScoreListResponse extends SpeakeasyBase {
    items?: PlayerLeaderboardScore[];
    kind?: string;
    nextPageToken?: string;
    player?: Player;
}
