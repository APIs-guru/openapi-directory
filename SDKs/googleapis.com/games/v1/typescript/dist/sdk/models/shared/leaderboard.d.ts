import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LeaderboardOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED",
    LargerIsBetter = "LARGER_IS_BETTER",
    SmallerIsBetter = "SMALLER_IS_BETTER"
}
/**
 * The Leaderboard resource.
**/
export declare class Leaderboard extends SpeakeasyBase {
    iconUrl?: string;
    id?: string;
    isIconUrlDefault?: boolean;
    kind?: string;
    name?: string;
    order?: LeaderboardOrderEnum;
}
