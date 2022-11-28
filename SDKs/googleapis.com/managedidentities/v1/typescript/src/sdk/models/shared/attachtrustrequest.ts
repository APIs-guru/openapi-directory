import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";



// AttachTrustRequestInput
/** 
 * Request message for AttachTrust
**/
export class AttachTrustRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust?: TrustInput;
}
