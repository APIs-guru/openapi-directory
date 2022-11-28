import { SpeakeasyBase } from "../../../internal/utils";
import { KmsWrappedCryptoKey } from "./kmswrappedcryptokey";
/**
 * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output. For example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`.
**/
export declare class CryptoHashConfig extends SpeakeasyBase {
    cryptoKey?: string;
    kmsWrapped?: KmsWrappedCryptoKey;
}
