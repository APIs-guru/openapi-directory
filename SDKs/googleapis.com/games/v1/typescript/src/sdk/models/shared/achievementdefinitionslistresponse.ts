import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AchievementDefinition } from "./achievementdefinition";


// AchievementDefinitionsListResponse
/** 
 * A list of achievement definition objects.
**/
export class AchievementDefinitionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.AchievementDefinition })
  items?: AchievementDefinition[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
