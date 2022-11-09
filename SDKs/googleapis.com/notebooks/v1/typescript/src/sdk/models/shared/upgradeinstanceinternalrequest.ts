import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpgradeInstanceInternalRequestTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED"
,    UpgradeFramework = "UPGRADE_FRAMEWORK"
,    UpgradeOs = "UPGRADE_OS"
,    UpgradeCuda = "UPGRADE_CUDA"
,    UpgradeAll = "UPGRADE_ALL"
}


// UpgradeInstanceInternalRequest
/** 
 * Request for upgrading a notebook instance from within the VM
**/
export class UpgradeInstanceInternalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: UpgradeInstanceInternalRequestTypeEnum;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;
}
