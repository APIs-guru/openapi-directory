import { SpeakeasyBase } from "../../../internal/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";
/**
 * An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be a Upgrade Note.
**/
export declare class UpgradeNote extends SpeakeasyBase {
    distributions?: UpgradeDistribution[];
    package?: string;
    version?: Version;
}
