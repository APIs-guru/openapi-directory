import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerLevel } from "./playerlevel";



// MetagameConfig
/** 
 * The metagame config resource
**/
export class MetagameConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentVersion" })
  currentVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=playerLevels", elemType: PlayerLevel })
  playerLevels?: PlayerLevel[];
}
