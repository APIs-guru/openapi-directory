import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoUpgradeOptions
/** 
 * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
**/
export class AutoUpgradeOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoUpgradeStartTime" })
  autoUpgradeStartTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
