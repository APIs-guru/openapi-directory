import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
**/
export declare class InventoryVersionedPackage extends SpeakeasyBase {
    architecture?: string;
    packageName?: string;
    version?: string;
}
