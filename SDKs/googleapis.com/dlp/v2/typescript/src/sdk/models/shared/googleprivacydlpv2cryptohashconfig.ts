import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";



// GooglePrivacyDlpV2CryptoHashConfig
/** 
 * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
**/
export class GooglePrivacyDlpV2CryptoHashConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKey" })
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;
}
