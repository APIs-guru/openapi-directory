import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WrappingPublicKey
/** 
 * The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
**/
export class WrappingPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pem" })
  pem?: string;
}
