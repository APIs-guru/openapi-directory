import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpgradeInstanceInternalRequestTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED",
    UpgradeFramework = "UPGRADE_FRAMEWORK",
    UpgradeOs = "UPGRADE_OS",
    UpgradeCuda = "UPGRADE_CUDA",
    UpgradeAll = "UPGRADE_ALL"
}


// UpgradeInstanceInternalRequest
/** 
 * Request for upgrading a notebook instance from within the VM
**/
export class UpgradeInstanceInternalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpgradeInstanceInternalRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;
}
