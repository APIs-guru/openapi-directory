import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchievementConfiguration } from "./achievementconfiguration";



// AchievementConfigurationListResponse
/** 
 * A ListConfigurations response.
**/
export class AchievementConfigurationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: AchievementConfiguration })
  items?: AchievementConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
