import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GenerateRandomBytesRequestProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// GenerateRandomBytesRequest
/** 
 * Request message for KeyManagementService.GenerateRandomBytes.
**/
export class GenerateRandomBytesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lengthBytes" })
  lengthBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: GenerateRandomBytesRequestProtectionLevelEnum;
}
