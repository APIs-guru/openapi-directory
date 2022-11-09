import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BuildSignatureKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED"
,    PgpAsciiArmored = "PGP_ASCII_ARMORED"
,    PkixPem = "PKIX_PEM"
}


// BuildSignature
/** 
 * Message encapsulating the signature of the verified build.
**/
export class BuildSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=keyType" })
  keyType?: BuildSignatureKeyTypeEnum;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
