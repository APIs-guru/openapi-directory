import { SpeakeasyBase } from "../../../internal/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";
import { WindowsUpdate } from "./windowsupdate";
/**
 * An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update.
**/
export declare class UpgradeNote extends SpeakeasyBase {
    distributions?: UpgradeDistribution[];
    package?: string;
    version?: Version;
    windowsUpdate?: WindowsUpdate;
}
