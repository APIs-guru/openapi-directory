import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AsymmetricSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// AsymmetricSignResponse
/** 
 * Response message for KeyManagementService.AsymmetricSign.
**/
export class AsymmetricSignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: AsymmetricSignResponseProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureCrc32c" })
  signatureCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedDataCrc32c" })
  verifiedDataCrc32c?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifiedDigestCrc32c" })
  verifiedDigestCrc32c?: boolean;
}
