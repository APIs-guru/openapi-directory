import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AchievementRevealResponseCurrentStateEnum {
    RevealAchievementStateUnspecified = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An achievement reveal response
**/
export declare class AchievementRevealResponse extends SpeakeasyBase {
    currentState?: AchievementRevealResponseCurrentStateEnum;
    kind?: string;
}
