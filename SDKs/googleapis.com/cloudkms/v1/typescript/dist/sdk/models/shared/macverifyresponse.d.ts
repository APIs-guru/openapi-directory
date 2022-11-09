import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MacVerifyResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.MacVerify.
**/
export declare class MacVerifyResponse extends SpeakeasyBase {
    name?: string;
    protectionLevel?: MacVerifyResponseProtectionLevelEnum;
    success?: boolean;
    verifiedDataCrc32c?: boolean;
    verifiedMacCrc32c?: boolean;
    verifiedSuccessIntegrity?: boolean;
}
