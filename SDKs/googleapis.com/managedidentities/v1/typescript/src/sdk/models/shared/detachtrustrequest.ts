import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";



// DetachTrustRequestInput
/** 
 * Request message for DetachTrust
**/
export class DetachTrustRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust?: TrustInput;
}
