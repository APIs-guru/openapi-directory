import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImageConfigurationImageTypeEnum {
    ImageTypeUnspecified = "IMAGE_TYPE_UNSPECIFIED",
    AchievementIcon = "ACHIEVEMENT_ICON",
    LeaderboardIcon = "LEADERBOARD_ICON"
}


// ImageConfiguration
/** 
 * An image configuration resource.
**/
export class ImageConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: ImageConfigurationImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
