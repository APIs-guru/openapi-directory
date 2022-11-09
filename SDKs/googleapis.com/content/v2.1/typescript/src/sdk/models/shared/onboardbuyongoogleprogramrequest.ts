import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnboardBuyOnGoogleProgramRequest
/** 
 * Request message for the OnboardProgram method.
**/
export class OnboardBuyOnGoogleProgramRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerServiceEmail" })
  customerServiceEmail?: string;
}
