import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ManagementSettingsRenewalMethodEnum {
    RenewalMethodUnspecified = "RENEWAL_METHOD_UNSPECIFIED",
    AutomaticRenewal = "AUTOMATIC_RENEWAL",
    ManualRenewal = "MANUAL_RENEWAL"
}

export enum ManagementSettingsTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED",
    Unlocked = "UNLOCKED",
    Locked = "LOCKED"
}


// ManagementSettings
/** 
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
export class ManagementSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=renewalMethod" })
  renewalMethod?: ManagementSettingsRenewalMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=transferLockState" })
  transferLockState?: ManagementSettingsTransferLockStateEnum;
}


// ManagementSettingsInput
/** 
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
export class ManagementSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transferLockState" })
  transferLockState?: ManagementSettingsTransferLockStateEnum;
}
