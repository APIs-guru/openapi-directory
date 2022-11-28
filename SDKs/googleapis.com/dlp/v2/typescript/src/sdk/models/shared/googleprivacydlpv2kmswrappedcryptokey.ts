import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2KmsWrappedCryptoKey
/** 
 * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).
**/
export class GooglePrivacyDlpV2KmsWrappedCryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKeyName" })
  cryptoKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=wrappedKey" })
  wrappedKey?: string;
}
