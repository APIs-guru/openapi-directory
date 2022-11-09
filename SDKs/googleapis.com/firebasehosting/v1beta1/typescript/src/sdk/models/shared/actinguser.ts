import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActingUser
/** 
 * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
**/
export class ActingUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;
}
