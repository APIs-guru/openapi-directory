import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RsaPublicKeyInfo
/** 
 * Information of a RSA public key.
**/
export class RsaPublicKeyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keySize" })
  keySize?: number;
}
