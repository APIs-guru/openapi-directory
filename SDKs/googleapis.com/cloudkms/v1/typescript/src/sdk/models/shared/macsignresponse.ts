import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MacSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// MacSignResponse
/** 
 * Response message for KeyManagementService.MacSign.
**/
export class MacSignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac?: string;

  @SpeakeasyMetadata({ data: "json, name=macCrc32c" })
  macCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: MacSignResponseProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=verifiedDataCrc32c" })
  verifiedDataCrc32c?: boolean;
}
