import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MacVerifyResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// MacVerifyResponse
/** 
 * Response message for KeyManagementService.MacVerify.
**/
export class MacVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: MacVerifyResponseProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifiedDataCrc32c" })
  verifiedDataCrc32c?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifiedMacCrc32c" })
  verifiedMacCrc32c?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifiedSuccessIntegrity" })
  verifiedSuccessIntegrity?: boolean;
}
