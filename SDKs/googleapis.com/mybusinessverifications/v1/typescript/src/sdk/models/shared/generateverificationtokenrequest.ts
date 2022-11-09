import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// GenerateVerificationTokenRequest
/** 
 * Request message for Verifications.GenerateVerificationToken.
**/
export class GenerateVerificationTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;
}
