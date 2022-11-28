import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GamesPlayerLevelResource
/** 
 * 1P/3P metadata about a user's level.
**/
export class GamesPlayerLevelResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=maxExperiencePoints" })
  maxExperiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=minExperiencePoints" })
  minExperiencePoints?: string;
}
