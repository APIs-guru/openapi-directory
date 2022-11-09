import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";

export enum TransferParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED"
,    PublicContactData = "PUBLIC_CONTACT_DATA"
,    PrivateContactData = "PRIVATE_CONTACT_DATA"
,    RedactedContactData = "REDACTED_CONTACT_DATA"
}

export enum TransferParametersTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED"
,    Unlocked = "UNLOCKED"
,    Locked = "LOCKED"
}


// TransferParameters
/** 
 * Parameters required to transfer a domain from another registrar.
**/
export class TransferParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentRegistrar" })
  currentRegistrar?: string;

  @Metadata({ data: "json, name=currentRegistrarUri" })
  currentRegistrarUri?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=nameServers" })
  nameServers?: string[];

  @Metadata({ data: "json, name=supportedPrivacy" })
  supportedPrivacy?: TransferParametersSupportedPrivacyEnum[];

  @Metadata({ data: "json, name=transferLockState" })
  transferLockState?: TransferParametersTransferLockStateEnum;

  @Metadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
