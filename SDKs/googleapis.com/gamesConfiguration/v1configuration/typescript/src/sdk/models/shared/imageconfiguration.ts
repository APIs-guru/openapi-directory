import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImageConfigurationImageTypeEnum {
    ImageTypeUnspecified = "IMAGE_TYPE_UNSPECIFIED"
,    AchievementIcon = "ACHIEVEMENT_ICON"
,    LeaderboardIcon = "LEADERBOARD_ICON"
}


// ImageConfiguration
/** 
 * An image configuration resource.
**/
export class ImageConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageType" })
  imageType?: ImageConfigurationImageTypeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
