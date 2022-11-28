import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AchievementRevealResponseCurrentStateEnum {
    RevealAchievementStateUnspecified = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}


// AchievementRevealResponse
/** 
 * An achievement reveal response
**/
export class AchievementRevealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentState" })
  currentState?: AchievementRevealResponseCurrentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
