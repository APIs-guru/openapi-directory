import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KmsWrappedCryptoKey } from "./googleprivacydlpv2kmswrappedcryptokey";
import { GooglePrivacyDlpV2TransientCryptoKey } from "./googleprivacydlpv2transientcryptokey";
import { GooglePrivacyDlpV2UnwrappedCryptoKey } from "./googleprivacydlpv2unwrappedcryptokey";



// GooglePrivacyDlpV2CryptoKey
/** 
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
**/
export class GooglePrivacyDlpV2CryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsWrapped" })
  kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey;

  @SpeakeasyMetadata({ data: "json, name=transient" })
  transient?: GooglePrivacyDlpV2TransientCryptoKey;

  @SpeakeasyMetadata({ data: "json, name=unwrapped" })
  unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey;
}
