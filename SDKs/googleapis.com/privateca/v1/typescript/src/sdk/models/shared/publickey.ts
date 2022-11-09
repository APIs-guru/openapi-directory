import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublicKeyFormatEnum {
    KeyFormatUnspecified = "KEY_FORMAT_UNSPECIFIED"
,    Pem = "PEM"
}


// PublicKey
/** 
 * A PublicKey describes a public key.
**/
export class PublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: PublicKeyFormatEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;
}
