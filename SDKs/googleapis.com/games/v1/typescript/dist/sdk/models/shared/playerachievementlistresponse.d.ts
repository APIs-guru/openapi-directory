import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerAchievement } from "./playerachievement";
/**
 * A list of achievement objects.
**/
export declare class PlayerAchievementListResponse extends SpeakeasyBase {
    items?: PlayerAchievement[];
    kind?: string;
    nextPageToken?: string;
}
