import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Profile
/** 
 * All information pertaining to the location's profile.
**/
export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;
}
