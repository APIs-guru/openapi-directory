import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";
import { WindowsUpdate } from "./windowsupdate";



// UpgradeOccurrence
/** 
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
**/
export class UpgradeOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: UpgradeDistribution;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=parsedVersion" })
  parsedVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=windowsUpdate" })
  windowsUpdate?: WindowsUpdate;
}
