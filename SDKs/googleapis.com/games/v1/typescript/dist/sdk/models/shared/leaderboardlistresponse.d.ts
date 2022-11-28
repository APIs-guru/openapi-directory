import { SpeakeasyBase } from "../../../internal/utils";
import { Leaderboard } from "./leaderboard";
/**
 * A list of leaderboard objects.
**/
export declare class LeaderboardListResponse extends SpeakeasyBase {
    items?: Leaderboard[];
    kind?: string;
    nextPageToken?: string;
}
