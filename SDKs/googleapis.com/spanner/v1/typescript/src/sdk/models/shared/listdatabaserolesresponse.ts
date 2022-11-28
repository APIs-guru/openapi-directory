import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseRole } from "./databaserole";



// ListDatabaseRolesResponse
/** 
 * The response for ListDatabaseRoles.
**/
export class ListDatabaseRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseRoles", elemType: DatabaseRole })
  databaseRoles?: DatabaseRole[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
