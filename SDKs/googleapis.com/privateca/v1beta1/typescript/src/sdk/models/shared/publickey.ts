import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublicKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED"
,    PemRsaKey = "PEM_RSA_KEY"
,    PemEcKey = "PEM_EC_KEY"
}


// PublicKey
/** 
 * A PublicKey describes a public key.
**/
export class PublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=type" })
  type?: PublicKeyTypeEnum;
}
