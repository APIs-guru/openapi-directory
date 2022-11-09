import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GamesPlayerLevelResource
/** 
 * 1P/3P metadata about a user's level.
**/
export class GamesPlayerLevelResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: number;

  @Metadata({ data: "json, name=maxExperiencePoints" })
  maxExperiencePoints?: string;

  @Metadata({ data: "json, name=minExperiencePoints" })
  minExperiencePoints?: string;
}
