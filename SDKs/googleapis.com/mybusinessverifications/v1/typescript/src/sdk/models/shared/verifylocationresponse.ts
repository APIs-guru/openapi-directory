import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";



// VerifyLocationResponse
/** 
 * Response message for Verifications.VerifyLocation.
**/
export class VerifyLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: Verification;
}
