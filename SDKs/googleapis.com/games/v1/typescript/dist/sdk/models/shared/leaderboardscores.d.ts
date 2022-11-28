import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardEntry } from "./leaderboardentry";
/**
 * A ListScores response.
**/
export declare class LeaderboardScores extends SpeakeasyBase {
    items?: LeaderboardEntry[];
    kind?: string;
    nextPageToken?: string;
    numScores?: string;
    playerScore?: LeaderboardEntry;
    prevPageToken?: string;
}
