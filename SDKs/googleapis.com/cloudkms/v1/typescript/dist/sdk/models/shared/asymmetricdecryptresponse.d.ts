import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AsymmetricDecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.AsymmetricDecrypt.
**/
export declare class AsymmetricDecryptResponse extends SpeakeasyBase {
    plaintext?: string;
    plaintextCrc32c?: string;
    protectionLevel?: AsymmetricDecryptResponseProtectionLevelEnum;
    verifiedCiphertextCrc32c?: boolean;
}
