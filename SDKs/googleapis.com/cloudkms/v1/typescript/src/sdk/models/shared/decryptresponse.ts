import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// DecryptResponse
/** 
 * Response message for KeyManagementService.Decrypt.
**/
export class DecryptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=plaintext" })
  plaintext?: string;

  @Metadata({ data: "json, name=plaintextCrc32c" })
  plaintextCrc32c?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: DecryptResponseProtectionLevelEnum;

  @Metadata({ data: "json, name=usedPrimary" })
  usedPrimary?: boolean;
}
