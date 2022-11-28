import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GenerateRandomBytesRequestProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Request message for KeyManagementService.GenerateRandomBytes.
**/
export declare class GenerateRandomBytesRequest extends SpeakeasyBase {
    lengthBytes?: number;
    protectionLevel?: GenerateRandomBytesRequestProtectionLevelEnum;
}
