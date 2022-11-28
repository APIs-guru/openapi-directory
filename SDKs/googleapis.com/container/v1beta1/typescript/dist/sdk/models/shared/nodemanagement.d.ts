import { SpeakeasyBase } from "../../../internal/utils";
import { AutoUpgradeOptions } from "./autoupgradeoptions";
/**
 * NodeManagement defines the set of node management services turned on for the node pool.
**/
export declare class NodeManagement extends SpeakeasyBase {
    autoRepair?: boolean;
    autoUpgrade?: boolean;
    upgradeOptions?: AutoUpgradeOptions;
}
