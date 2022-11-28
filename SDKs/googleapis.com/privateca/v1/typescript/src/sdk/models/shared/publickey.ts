import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PublicKeyFormatEnum {
    KeyFormatUnspecified = "KEY_FORMAT_UNSPECIFIED",
    Pem = "PEM"
}


// PublicKey
/** 
 * A PublicKey describes a public key.
**/
export class PublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: PublicKeyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
