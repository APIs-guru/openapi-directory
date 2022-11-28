import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementConfiguration } from "./achievementconfiguration";
/**
 * A ListConfigurations response.
**/
export declare class AchievementConfigurationListResponse extends SpeakeasyBase {
    items?: AchievementConfiguration[];
    kind?: string;
    nextPageToken?: string;
}
