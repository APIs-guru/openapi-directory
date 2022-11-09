import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompleteVerificationRequest
/** 
 * Request message for Verifications.CompleteVerificationAction.
**/
export class CompleteVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pin" })
  pin?: string;
}
