import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KmsWrappedCryptoKey
/** 
 * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key).
**/
export class KmsWrappedCryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKey" })
  cryptoKey?: string;

  @SpeakeasyMetadata({ data: "json, name=wrappedKey" })
  wrappedKey?: string;
}
