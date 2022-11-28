import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EncryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// EncryptResponse
/** 
 * Response message for KeyManagementService.Encrypt.
**/
export class EncryptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=ciphertextCrc32c" })
  ciphertextCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: EncryptResponseProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=verifiedAdditionalAuthenticatedDataCrc32c" })
  verifiedAdditionalAuthenticatedDataCrc32c?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifiedPlaintextCrc32c" })
  verifiedPlaintextCrc32c?: boolean;
}
