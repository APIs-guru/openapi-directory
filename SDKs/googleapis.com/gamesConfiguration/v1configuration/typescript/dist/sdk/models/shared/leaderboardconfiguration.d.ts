import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardConfigurationDetail } from "./leaderboardconfigurationdetail";
export declare enum LeaderboardConfigurationScoreOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED",
    LargerIsBetter = "LARGER_IS_BETTER",
    SmallerIsBetter = "SMALLER_IS_BETTER"
}
/**
 * An leaderboard configuration resource.
**/
export declare class LeaderboardConfiguration extends SpeakeasyBase {
    draft?: LeaderboardConfigurationDetail;
    id?: string;
    kind?: string;
    published?: LeaderboardConfigurationDetail;
    scoreMax?: string;
    scoreMin?: string;
    scoreOrder?: LeaderboardConfigurationScoreOrderEnum;
    token?: string;
}
