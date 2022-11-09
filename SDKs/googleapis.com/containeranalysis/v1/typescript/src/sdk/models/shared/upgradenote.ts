import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";
import { WindowsUpdate } from "./windowsupdate";


// UpgradeNote
/** 
 * An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update.
**/
export class UpgradeNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributions", elemType: shared.UpgradeDistribution })
  distributions?: UpgradeDistribution[];

  @Metadata({ data: "json, name=package" })
  package?: string;

  @Metadata({ data: "json, name=version" })
  version?: Version;

  @Metadata({ data: "json, name=windowsUpdate" })
  windowsUpdate?: WindowsUpdate;
}
