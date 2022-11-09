import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyId
/** 
 * A KeyId identifies a specific public key, usually by hashing the public key.
**/
export class KeyId extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;
}
