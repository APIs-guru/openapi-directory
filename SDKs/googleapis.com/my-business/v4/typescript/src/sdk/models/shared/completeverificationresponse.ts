import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Verification } from "./verification";


// CompleteVerificationResponse
/** 
 * Response message for Verifications.CompleteVerificationAction.
**/
export class CompleteVerificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=verification" })
  verification?: Verification;
}
