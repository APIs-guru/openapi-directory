import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.Decrypt.
**/
export declare class DecryptResponse extends SpeakeasyBase {
    plaintext?: string;
    plaintextCrc32c?: string;
    protectionLevel?: DecryptResponseProtectionLevelEnum;
    usedPrimary?: boolean;
}
