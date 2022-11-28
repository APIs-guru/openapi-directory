import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
**/
export declare class UpgradeDistribution extends SpeakeasyBase {
    classification?: string;
    cpeUri?: string;
    cve?: string[];
    severity?: string;
}
