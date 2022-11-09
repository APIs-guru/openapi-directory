import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CryptoKey } from "./cryptokey";
/**
 * Response message for KeyManagementService.ListCryptoKeys.
**/
export declare class ListCryptoKeysResponse extends SpeakeasyBase {
    cryptoKeys?: CryptoKey[];
    nextPageToken?: string;
    totalSize?: number;
}
