import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LeaderboardOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED"
,    LargerIsBetter = "LARGER_IS_BETTER"
,    SmallerIsBetter = "SMALLER_IS_BETTER"
}


// Leaderboard
/** 
 * The Leaderboard resource.
**/
export class Leaderboard extends SpeakeasyBase {
  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isIconUrlDefault" })
  isIconUrlDefault?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=order" })
  order?: LeaderboardOrderEnum;
}
