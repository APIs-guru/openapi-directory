import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum TransferParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}
export declare enum TransferParametersTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED",
    Unlocked = "UNLOCKED",
    Locked = "LOCKED"
}
/**
 * Parameters required to transfer a domain from another registrar.
**/
export declare class TransferParameters extends SpeakeasyBase {
    currentRegistrar?: string;
    currentRegistrarUri?: string;
    domainName?: string;
    nameServers?: string[];
    supportedPrivacy?: TransferParametersSupportedPrivacyEnum[];
    transferLockState?: TransferParametersTransferLockStateEnum;
    yearlyPrice?: Money;
}
