import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerLevel } from "./playerlevel";
/**
 * The metagame config resource
**/
export declare class MetagameConfig extends SpeakeasyBase {
    currentVersion?: number;
    kind?: string;
    playerLevels?: PlayerLevel[];
}
