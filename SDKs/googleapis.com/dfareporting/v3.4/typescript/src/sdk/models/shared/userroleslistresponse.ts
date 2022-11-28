import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRole } from "./userrole";



// UserRolesListResponse
/** 
 * User Role List Response
**/
export class UserRolesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userRoles", elemType: UserRole })
  userRoles?: UserRole[];
}
