import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum EncryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.Encrypt.
**/
export declare class EncryptResponse extends SpeakeasyBase {
    ciphertext?: string;
    ciphertextCrc32c?: string;
    name?: string;
    protectionLevel?: EncryptResponseProtectionLevelEnum;
    verifiedAdditionalAuthenticatedDataCrc32c?: boolean;
    verifiedPlaintextCrc32c?: boolean;
}
