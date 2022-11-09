import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManagementSettingsRenewalMethodEnum {
    RenewalMethodUnspecified = "RENEWAL_METHOD_UNSPECIFIED"
,    AutomaticRenewal = "AUTOMATIC_RENEWAL"
,    ManualRenewal = "MANUAL_RENEWAL"
}

export enum ManagementSettingsTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED"
,    Unlocked = "UNLOCKED"
,    Locked = "LOCKED"
}


// ManagementSettings
/** 
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
export class ManagementSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=renewalMethod" })
  renewalMethod?: ManagementSettingsRenewalMethodEnum;

  @Metadata({ data: "json, name=transferLockState" })
  transferLockState?: ManagementSettingsTransferLockStateEnum;
}
