import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum TransferParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}

export enum TransferParametersTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED",
    Unlocked = "UNLOCKED",
    Locked = "LOCKED"
}


// TransferParameters
/** 
 * Parameters required to transfer a domain from another registrar.
**/
export class TransferParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentRegistrar" })
  currentRegistrar?: string;

  @SpeakeasyMetadata({ data: "json, name=currentRegistrarUri" })
  currentRegistrarUri?: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=nameServers" })
  nameServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportedPrivacy" })
  supportedPrivacy?: TransferParametersSupportedPrivacyEnum[];

  @SpeakeasyMetadata({ data: "json, name=transferLockState" })
  transferLockState?: TransferParametersTransferLockStateEnum;

  @SpeakeasyMetadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
