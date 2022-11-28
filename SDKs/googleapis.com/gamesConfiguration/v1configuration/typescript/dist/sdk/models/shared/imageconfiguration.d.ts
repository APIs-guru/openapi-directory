import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImageConfigurationImageTypeEnum {
    ImageTypeUnspecified = "IMAGE_TYPE_UNSPECIFIED",
    AchievementIcon = "ACHIEVEMENT_ICON",
    LeaderboardIcon = "LEADERBOARD_ICON"
}
/**
 * An image configuration resource.
**/
export declare class ImageConfiguration extends SpeakeasyBase {
    imageType?: ImageConfigurationImageTypeEnum;
    kind?: string;
    resourceId?: string;
    url?: string;
}
