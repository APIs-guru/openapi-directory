import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Profile
/** 
 * All information pertaining to the location's profile.
**/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
