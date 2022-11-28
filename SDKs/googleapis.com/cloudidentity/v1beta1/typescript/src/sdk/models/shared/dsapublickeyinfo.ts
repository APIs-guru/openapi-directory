import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DsaPublicKeyInfo
/** 
 * Information of a DSA public key.
**/
export class DsaPublicKeyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keySize" })
  keySize?: number;
}
