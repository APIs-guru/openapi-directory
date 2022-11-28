import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KmsWrappedCryptoKey } from "./googleprivacydlpv2kmswrappedcryptokey";
import { GooglePrivacyDlpV2TransientCryptoKey } from "./googleprivacydlpv2transientcryptokey";
import { GooglePrivacyDlpV2UnwrappedCryptoKey } from "./googleprivacydlpv2unwrappedcryptokey";
/**
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
**/
export declare class GooglePrivacyDlpV2CryptoKey extends SpeakeasyBase {
    kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey;
    transient?: GooglePrivacyDlpV2TransientCryptoKey;
    unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey;
}
