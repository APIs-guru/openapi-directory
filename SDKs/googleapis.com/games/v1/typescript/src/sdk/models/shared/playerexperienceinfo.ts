import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerLevel } from "./playerlevel";



// PlayerExperienceInfo
/** 
 * 1P/3P metadata about the player's experience.
**/
export class PlayerExperienceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentExperiencePoints" })
  currentExperiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=currentLevel" })
  currentLevel?: PlayerLevel;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastLevelUpTimestampMillis" })
  lastLevelUpTimestampMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLevel" })
  nextLevel?: PlayerLevel;
}
