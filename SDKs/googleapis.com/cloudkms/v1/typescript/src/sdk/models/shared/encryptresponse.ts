import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EncryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// EncryptResponse
/** 
 * Response message for KeyManagementService.Encrypt.
**/
export class EncryptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @Metadata({ data: "json, name=ciphertextCrc32c" })
  ciphertextCrc32c?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: EncryptResponseProtectionLevelEnum;

  @Metadata({ data: "json, name=verifiedAdditionalAuthenticatedDataCrc32c" })
  verifiedAdditionalAuthenticatedDataCrc32c?: boolean;

  @Metadata({ data: "json, name=verifiedPlaintextCrc32c" })
  verifiedPlaintextCrc32c?: boolean;
}
