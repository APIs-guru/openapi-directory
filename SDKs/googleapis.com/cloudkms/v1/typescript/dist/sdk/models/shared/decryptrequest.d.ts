import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for KeyManagementService.Decrypt.
**/
export declare class DecryptRequest extends SpeakeasyBase {
    additionalAuthenticatedData?: string;
    additionalAuthenticatedDataCrc32c?: string;
    ciphertext?: string;
    ciphertextCrc32c?: string;
}
