import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DsaPublicKeyInfo
/** 
 * Information of a DSA public key.
**/
export class DsaPublicKeyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=keySize" })
  keySize?: number;
}
