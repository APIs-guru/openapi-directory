import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpgradeInstanceInternalRequestTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED",
    UpgradeFramework = "UPGRADE_FRAMEWORK",
    UpgradeOs = "UPGRADE_OS",
    UpgradeCuda = "UPGRADE_CUDA",
    UpgradeAll = "UPGRADE_ALL"
}
/**
 * Request for upgrading a notebook instance from within the VM
**/
export declare class UpgradeInstanceInternalRequest extends SpeakeasyBase {
    type?: UpgradeInstanceInternalRequestTypeEnum;
    vmId?: string;
}
