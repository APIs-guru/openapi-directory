import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AsymmetricSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// AsymmetricSignResponse
/** 
 * Response message for KeyManagementService.AsymmetricSign.
**/
export class AsymmetricSignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: AsymmetricSignResponseProtectionLevelEnum;

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=signatureCrc32c" })
  signatureCrc32c?: string;

  @Metadata({ data: "json, name=verifiedDataCrc32c" })
  verifiedDataCrc32c?: boolean;

  @Metadata({ data: "json, name=verifiedDigestCrc32c" })
  verifiedDigestCrc32c?: boolean;
}
