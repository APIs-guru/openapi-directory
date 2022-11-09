import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerLevel } from "./playerlevel";
import { PlayerLevel } from "./playerlevel";


// PlayerExperienceInfo
/** 
 * 1P/3P metadata about the player's experience.
**/
export class PlayerExperienceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentExperiencePoints" })
  currentExperiencePoints?: string;

  @Metadata({ data: "json, name=currentLevel" })
  currentLevel?: PlayerLevel;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastLevelUpTimestampMillis" })
  lastLevelUpTimestampMillis?: string;

  @Metadata({ data: "json, name=nextLevel" })
  nextLevel?: PlayerLevel;
}
