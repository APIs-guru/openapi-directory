import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AchievementConfiguration } from "./achievementconfiguration";


// AchievementConfigurationListResponse
/** 
 * A ListConfigurations response.
**/
export class AchievementConfigurationListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.AchievementConfiguration })
  items?: AchievementConfiguration[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
