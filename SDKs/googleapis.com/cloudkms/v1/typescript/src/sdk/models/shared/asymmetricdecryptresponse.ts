import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AsymmetricDecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// AsymmetricDecryptResponse
/** 
 * Response message for KeyManagementService.AsymmetricDecrypt.
**/
export class AsymmetricDecryptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plaintext" })
  plaintext?: string;

  @SpeakeasyMetadata({ data: "json, name=plaintextCrc32c" })
  plaintextCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: AsymmetricDecryptResponseProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=verifiedCiphertextCrc32c" })
  verifiedCiphertextCrc32c?: boolean;
}
