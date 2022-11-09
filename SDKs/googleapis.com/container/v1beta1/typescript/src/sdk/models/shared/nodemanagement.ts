import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoUpgradeOptions } from "./autoupgradeoptions";


// NodeManagement
/** 
 * NodeManagement defines the set of node management services turned on for the node pool.
**/
export class NodeManagement extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRepair" })
  autoRepair?: boolean;

  @Metadata({ data: "json, name=autoUpgrade" })
  autoUpgrade?: boolean;

  @Metadata({ data: "json, name=upgradeOptions" })
  upgradeOptions?: AutoUpgradeOptions;
}
