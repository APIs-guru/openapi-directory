import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchievementDefinition } from "./achievementdefinition";



// AchievementDefinitionsListResponse
/** 
 * A list of achievement definition objects.
**/
export class AchievementDefinitionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: AchievementDefinition })
  items?: AchievementDefinition[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
