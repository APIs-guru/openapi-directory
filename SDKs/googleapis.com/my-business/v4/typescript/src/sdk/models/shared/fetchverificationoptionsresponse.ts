import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VerificationOption } from "./verificationoption";


// FetchVerificationOptionsResponse
/** 
 * Response message for Verifications.FetchVerificationOptions.
**/
export class FetchVerificationOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: shared.VerificationOption })
  options?: VerificationOption[];
}
