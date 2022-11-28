import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// GenerateVerificationTokenRequest
/** 
 * Request message for Verifications.GenerateVerificationToken.
**/
export class GenerateVerificationTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;
}
