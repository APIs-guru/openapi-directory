import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";



// ValidateTrustRequestInput
/** 
 * Request message for ValidateTrust
**/
export class ValidateTrustRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust?: TrustInput;
}
