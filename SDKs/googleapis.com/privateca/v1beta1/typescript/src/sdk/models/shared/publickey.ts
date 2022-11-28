import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PublicKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    PemRsaKey = "PEM_RSA_KEY",
    PemEcKey = "PEM_EC_KEY"
}


// PublicKey
/** 
 * A PublicKey describes a public key.
**/
export class PublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PublicKeyTypeEnum;
}
