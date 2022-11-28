import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}


// DecryptResponse
/** 
 * Response message for KeyManagementService.Decrypt.
**/
export class DecryptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plaintext" })
  plaintext?: string;

  @SpeakeasyMetadata({ data: "json, name=plaintextCrc32c" })
  plaintextCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: DecryptResponseProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=usedPrimary" })
  usedPrimary?: boolean;
}
