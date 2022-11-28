import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnboardBuyOnGoogleProgramRequest
/** 
 * Request message for the OnboardProgram method.
**/
export class OnboardBuyOnGoogleProgramRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerServiceEmail" })
  customerServiceEmail?: string;
}
