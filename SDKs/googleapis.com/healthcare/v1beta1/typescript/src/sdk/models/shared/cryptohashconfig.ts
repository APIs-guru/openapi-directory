import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsWrappedCryptoKey } from "./kmswrappedcryptokey";


// CryptoHashConfig
/** 
 * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output. For example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`.
**/
export class CryptoHashConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoKey" })
  cryptoKey?: string;

  @Metadata({ data: "json, name=kmsWrapped" })
  kmsWrapped?: KmsWrappedCryptoKey;
}
