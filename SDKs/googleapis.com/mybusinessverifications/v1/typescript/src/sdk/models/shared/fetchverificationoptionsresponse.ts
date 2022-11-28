import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationOption } from "./verificationoption";



// FetchVerificationOptionsResponse
/** 
 * Response message for Verifications.FetchVerificationOptions.
**/
export class FetchVerificationOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: VerificationOption })
  options?: VerificationOption[];
}
