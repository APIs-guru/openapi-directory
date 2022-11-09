import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RsaPublicKeyInfo
/** 
 * Information of a RSA public key.
**/
export class RsaPublicKeyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=keySize" })
  keySize?: number;
}
