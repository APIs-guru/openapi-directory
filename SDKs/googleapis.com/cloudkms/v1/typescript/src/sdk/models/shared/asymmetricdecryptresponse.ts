import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AsymmetricDecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// AsymmetricDecryptResponse
/** 
 * Response message for KeyManagementService.AsymmetricDecrypt.
**/
export class AsymmetricDecryptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=plaintext" })
  plaintext?: string;

  @Metadata({ data: "json, name=plaintextCrc32c" })
  plaintextCrc32c?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: AsymmetricDecryptResponseProtectionLevelEnum;

  @Metadata({ data: "json, name=verifiedCiphertextCrc32c" })
  verifiedCiphertextCrc32c?: boolean;
}
