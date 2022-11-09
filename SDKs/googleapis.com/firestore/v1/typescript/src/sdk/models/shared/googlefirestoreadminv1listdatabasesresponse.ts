import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1Database } from "./googlefirestoreadminv1database";


// GoogleFirestoreAdminV1ListDatabasesResponse
/** 
 * The list of databases for a project.
**/
export class GoogleFirestoreAdminV1ListDatabasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=databases", elemType: shared.GoogleFirestoreAdminV1Database })
  databases?: GoogleFirestoreAdminV1Database[];
}
