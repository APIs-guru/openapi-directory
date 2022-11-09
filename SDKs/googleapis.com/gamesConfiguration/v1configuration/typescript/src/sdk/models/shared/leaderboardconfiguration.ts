import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LeaderboardConfigurationDetail } from "./leaderboardconfigurationdetail";
import { LeaderboardConfigurationDetail } from "./leaderboardconfigurationdetail";

export enum LeaderboardConfigurationScoreOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED"
,    LargerIsBetter = "LARGER_IS_BETTER"
,    SmallerIsBetter = "SMALLER_IS_BETTER"
}


// LeaderboardConfiguration
/** 
 * An leaderboard configuration resource.
**/
export class LeaderboardConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=draft" })
  draft?: LeaderboardConfigurationDetail;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=published" })
  published?: LeaderboardConfigurationDetail;

  @Metadata({ data: "json, name=scoreMax" })
  scoreMax?: string;

  @Metadata({ data: "json, name=scoreMin" })
  scoreMin?: string;

  @Metadata({ data: "json, name=scoreOrder" })
  scoreOrder?: LeaderboardConfigurationScoreOrderEnum;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
