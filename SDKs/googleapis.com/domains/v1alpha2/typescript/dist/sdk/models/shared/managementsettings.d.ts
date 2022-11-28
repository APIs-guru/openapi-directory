import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManagementSettingsRenewalMethodEnum {
    RenewalMethodUnspecified = "RENEWAL_METHOD_UNSPECIFIED",
    AutomaticRenewal = "AUTOMATIC_RENEWAL",
    ManualRenewal = "MANUAL_RENEWAL"
}
export declare enum ManagementSettingsTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED",
    Unlocked = "UNLOCKED",
    Locked = "LOCKED"
}
/**
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
export declare class ManagementSettingsInput extends SpeakeasyBase {
    transferLockState?: ManagementSettingsTransferLockStateEnum;
}
/**
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
export declare class ManagementSettings extends SpeakeasyBase {
    renewalMethod?: ManagementSettingsRenewalMethodEnum;
    transferLockState?: ManagementSettingsTransferLockStateEnum;
}
