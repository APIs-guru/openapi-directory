import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BuildSignatureKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    PgpAsciiArmored = "PGP_ASCII_ARMORED",
    PkixPem = "PKIX_PEM"
}


// BuildSignature
/** 
 * Message encapsulating the signature of the verified build.
**/
export class BuildSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=keyType" })
  keyType?: BuildSignatureKeyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
