import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GamesPlayerLevelResource } from "./gamesplayerlevelresource";
import { GamesPlayerLevelResource } from "./gamesplayerlevelresource";


// GamesPlayerExperienceInfoResource
/** 
 * 1P/3P metadata about the player's experience.
**/
export class GamesPlayerExperienceInfoResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentExperiencePoints" })
  currentExperiencePoints?: string;

  @Metadata({ data: "json, name=currentLevel" })
  currentLevel?: GamesPlayerLevelResource;

  @Metadata({ data: "json, name=lastLevelUpTimestampMillis" })
  lastLevelUpTimestampMillis?: string;

  @Metadata({ data: "json, name=nextLevel" })
  nextLevel?: GamesPlayerLevelResource;
}
