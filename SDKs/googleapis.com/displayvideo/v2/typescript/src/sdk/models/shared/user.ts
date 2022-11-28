import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRoleInput } from "./assigneduserrole";
import { AssignedUserRole } from "./assigneduserrole";



// UserInput
/** 
 * A single user in Display & Video 360.
**/
export class UserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedUserRoles", elemType: AssignedUserRoleInput })
  assignedUserRoles?: AssignedUserRoleInput[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


// User
/** 
 * A single user in Display & Video 360.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedUserRoles", elemType: AssignedUserRole })
  assignedUserRoles?: AssignedUserRole[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
