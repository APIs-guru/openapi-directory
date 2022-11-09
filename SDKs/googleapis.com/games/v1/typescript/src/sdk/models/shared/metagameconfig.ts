import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerLevel } from "./playerlevel";


// MetagameConfig
/** 
 * The metagame config resource
**/
export class MetagameConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentVersion" })
  currentVersion?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=playerLevels", elemType: shared.PlayerLevel })
  playerLevels?: PlayerLevel[];
}
