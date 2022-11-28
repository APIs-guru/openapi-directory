import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";
import { GlobalPermission } from "./globalpermission";



// UserProfile
/** 
 * Global information for a user.
**/
export class UserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: GlobalPermission })
  permissions?: GlobalPermission[];

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedTeacher" })
  verifiedTeacher?: boolean;
}
