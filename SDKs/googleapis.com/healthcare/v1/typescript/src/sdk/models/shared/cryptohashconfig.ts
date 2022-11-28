import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsWrappedCryptoKey } from "./kmswrappedcryptokey";



// CryptoHashConfig
/** 
 * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).
**/
export class CryptoHashConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKey" })
  cryptoKey?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsWrapped" })
  kmsWrapped?: KmsWrappedCryptoKey;
}
