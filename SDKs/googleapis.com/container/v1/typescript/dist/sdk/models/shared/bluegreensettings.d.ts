import { SpeakeasyBase } from "../../../internal/utils";
import { StandardRolloutPolicy } from "./standardrolloutpolicy";
/**
 * Settings for blue-green upgrade.
**/
export declare class BlueGreenSettings extends SpeakeasyBase {
    nodePoolSoakDuration?: string;
    standardRolloutPolicy?: StandardRolloutPolicy;
}
