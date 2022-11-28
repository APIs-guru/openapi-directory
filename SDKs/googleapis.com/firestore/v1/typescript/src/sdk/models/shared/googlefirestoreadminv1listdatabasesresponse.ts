import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Database } from "./googlefirestoreadminv1database";



// GoogleFirestoreAdminV1ListDatabasesResponse
/** 
 * The list of databases for a project.
**/
export class GoogleFirestoreAdminV1ListDatabasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databases", elemType: GoogleFirestoreAdminV1Database })
  databases?: GoogleFirestoreAdminV1Database[];
}
