import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CompleteVerificationRequest
/** 
 * Request message for Verifications.CompleteVerificationAction.
**/
export class CompleteVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin?: string;
}
