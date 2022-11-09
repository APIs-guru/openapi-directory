import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Name } from "./name";
import { GlobalPermission } from "./globalpermission";


// UserProfile
/** 
 * Global information for a user.
**/
export class UserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: Name;

  @Metadata({ data: "json, name=permissions", elemType: shared.GlobalPermission })
  permissions?: GlobalPermission[];

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=verifiedTeacher" })
  verifiedTeacher?: boolean;
}
