import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoUpgradeOptions
/** 
 * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
**/
export class AutoUpgradeOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoUpgradeStartTime" })
  autoUpgradeStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
