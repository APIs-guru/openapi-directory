import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LeaderboardOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED",
    LargerIsBetter = "LARGER_IS_BETTER",
    SmallerIsBetter = "SMALLER_IS_BETTER"
}


// Leaderboard
/** 
 * The Leaderboard resource.
**/
export class Leaderboard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isIconUrlDefault" })
  isIconUrlDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: LeaderboardOrderEnum;
}
