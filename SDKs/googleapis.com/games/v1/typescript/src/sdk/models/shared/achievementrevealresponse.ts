import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AchievementRevealResponseCurrentStateEnum {
    RevealAchievementStateUnspecified = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED"
,    Revealed = "REVEALED"
,    Unlocked = "UNLOCKED"
}


// AchievementRevealResponse
/** 
 * An achievement reveal response
**/
export class AchievementRevealResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentState" })
  currentState?: AchievementRevealResponseCurrentStateEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
