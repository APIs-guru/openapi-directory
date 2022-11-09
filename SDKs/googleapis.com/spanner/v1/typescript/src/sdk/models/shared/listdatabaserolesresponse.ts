import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatabaseRole } from "./databaserole";


// ListDatabaseRolesResponse
/** 
 * The response for ListDatabaseRoles.
**/
export class ListDatabaseRolesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseRoles", elemType: shared.DatabaseRole })
  databaseRoles?: DatabaseRole[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
