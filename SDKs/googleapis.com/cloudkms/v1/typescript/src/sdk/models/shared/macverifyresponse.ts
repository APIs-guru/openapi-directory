import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MacVerifyResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// MacVerifyResponse
/** 
 * Response message for KeyManagementService.MacVerify.
**/
export class MacVerifyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: MacVerifyResponseProtectionLevelEnum;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=verifiedDataCrc32c" })
  verifiedDataCrc32c?: boolean;

  @Metadata({ data: "json, name=verifiedMacCrc32c" })
  verifiedMacCrc32c?: boolean;

  @Metadata({ data: "json, name=verifiedSuccessIntegrity" })
  verifiedSuccessIntegrity?: boolean;
}
