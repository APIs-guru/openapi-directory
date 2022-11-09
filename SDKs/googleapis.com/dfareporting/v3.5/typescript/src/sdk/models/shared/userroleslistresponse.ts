import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserRole } from "./userrole";


// UserRolesListResponse
/** 
 * User Role List Response
**/
export class UserRolesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userRoles", elemType: shared.UserRole })
  userRoles?: UserRole[];
}
