import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";



// CompleteVerificationResponse
/** 
 * Response message for Verifications.CompleteVerificationAction.
**/
export class CompleteVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: Verification;
}
