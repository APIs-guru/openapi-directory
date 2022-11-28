import { SpeakeasyBase } from "../../../internal/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";
import { WindowsUpdate } from "./windowsupdate";
/**
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
**/
export declare class UpgradeOccurrence extends SpeakeasyBase {
    distribution?: UpgradeDistribution;
    package?: string;
    parsedVersion?: Version;
    windowsUpdate?: WindowsUpdate;
}
