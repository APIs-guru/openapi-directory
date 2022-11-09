import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MacSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.MacSign.
**/
export declare class MacSignResponse extends SpeakeasyBase {
    mac?: string;
    macCrc32c?: string;
    name?: string;
    protectionLevel?: MacSignResponseProtectionLevelEnum;
    verifiedDataCrc32c?: boolean;
}
