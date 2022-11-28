import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GamesPlayerLevelResource } from "./gamesplayerlevelresource";



// GamesPlayerExperienceInfoResource
/** 
 * 1P/3P metadata about the player's experience.
**/
export class GamesPlayerExperienceInfoResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentExperiencePoints" })
  currentExperiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=currentLevel" })
  currentLevel?: GamesPlayerLevelResource;

  @SpeakeasyMetadata({ data: "json, name=lastLevelUpTimestampMillis" })
  lastLevelUpTimestampMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLevel" })
  nextLevel?: GamesPlayerLevelResource;
}
