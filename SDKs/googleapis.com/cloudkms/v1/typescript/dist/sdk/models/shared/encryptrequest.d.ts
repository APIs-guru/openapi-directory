import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for KeyManagementService.Encrypt.
**/
export declare class EncryptRequest extends SpeakeasyBase {
    additionalAuthenticatedData?: string;
    additionalAuthenticatedDataCrc32c?: string;
    plaintext?: string;
    plaintextCrc32c?: string;
}
