import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GenerateRandomBytesRequestProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// GenerateRandomBytesRequest
/** 
 * Request message for KeyManagementService.GenerateRandomBytes.
**/
export class GenerateRandomBytesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lengthBytes" })
  lengthBytes?: number;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: GenerateRandomBytesRequestProtectionLevelEnum;
}
