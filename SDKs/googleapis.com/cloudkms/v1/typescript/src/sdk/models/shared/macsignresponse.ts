import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MacSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// MacSignResponse
/** 
 * Response message for KeyManagementService.MacSign.
**/
export class MacSignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mac" })
  mac?: string;

  @Metadata({ data: "json, name=macCrc32c" })
  macCrc32c?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: MacSignResponseProtectionLevelEnum;

  @Metadata({ data: "json, name=verifiedDataCrc32c" })
  verifiedDataCrc32c?: boolean;
}
