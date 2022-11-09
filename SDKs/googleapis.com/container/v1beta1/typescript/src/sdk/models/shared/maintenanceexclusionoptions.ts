import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MaintenanceExclusionOptionsScopeEnum {
    NoUpgrades = "NO_UPGRADES"
,    NoMinorUpgrades = "NO_MINOR_UPGRADES"
,    NoMinorOrNodeUpgrades = "NO_MINOR_OR_NODE_UPGRADES"
}


// MaintenanceExclusionOptions
/** 
 * Represents the Maintenance exclusion option.
**/
export class MaintenanceExclusionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=scope" })
  scope?: MaintenanceExclusionOptionsScopeEnum;
}
