import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardConfigurationDetail } from "./leaderboardconfigurationdetail";


export enum LeaderboardConfigurationScoreOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED",
    LargerIsBetter = "LARGER_IS_BETTER",
    SmallerIsBetter = "SMALLER_IS_BETTER"
}


// LeaderboardConfiguration
/** 
 * An leaderboard configuration resource.
**/
export class LeaderboardConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: LeaderboardConfigurationDetail;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: LeaderboardConfigurationDetail;

  @SpeakeasyMetadata({ data: "json, name=scoreMax" })
  scoreMax?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreMin" })
  scoreMin?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreOrder" })
  scoreOrder?: LeaderboardConfigurationScoreOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
