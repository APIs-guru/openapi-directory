import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedUserRole } from "./assigneduserrole";


// User
/** 
 * A single user in Display & Video 360.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedUserRoles", elemType: shared.AssignedUserRole })
  assignedUserRoles?: AssignedUserRole[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
