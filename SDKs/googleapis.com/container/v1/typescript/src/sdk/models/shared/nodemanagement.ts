import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoUpgradeOptions } from "./autoupgradeoptions";



// NodeManagement
/** 
 * NodeManagement defines the set of node management services turned on for the node pool.
**/
export class NodeManagement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRepair" })
  autoRepair?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoUpgrade" })
  autoUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upgradeOptions" })
  upgradeOptions?: AutoUpgradeOptions;
}
