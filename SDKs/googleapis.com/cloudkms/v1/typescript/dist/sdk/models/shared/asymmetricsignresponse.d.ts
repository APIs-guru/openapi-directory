import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AsymmetricSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.AsymmetricSign.
**/
export declare class AsymmetricSignResponse extends SpeakeasyBase {
    name?: string;
    protectionLevel?: AsymmetricSignResponseProtectionLevelEnum;
    signature?: string;
    signatureCrc32c?: string;
    verifiedDataCrc32c?: boolean;
    verifiedDigestCrc32c?: boolean;
}
