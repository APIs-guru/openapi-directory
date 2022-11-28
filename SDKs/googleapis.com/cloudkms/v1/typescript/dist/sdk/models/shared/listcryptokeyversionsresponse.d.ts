import { SpeakeasyBase } from "../../../internal/utils";
import { CryptoKeyVersion } from "./cryptokeyversion";
/**
 * Response message for KeyManagementService.ListCryptoKeyVersions.
**/
export declare class ListCryptoKeyVersionsResponse extends SpeakeasyBase {
    cryptoKeyVersions?: CryptoKeyVersion[];
    nextPageToken?: string;
    totalSize?: number;
}
