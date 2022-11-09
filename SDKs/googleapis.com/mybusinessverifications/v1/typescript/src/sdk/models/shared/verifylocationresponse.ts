import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Verification } from "./verification";


// VerifyLocationResponse
/** 
 * Response message for Verifications.VerifyLocation.
**/
export class VerifyLocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=verification" })
  verification?: Verification;
}
