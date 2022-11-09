import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddPublicKeyRequest
/** 
 * Request message for AddPublicKey.
**/
export class AddPublicKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
