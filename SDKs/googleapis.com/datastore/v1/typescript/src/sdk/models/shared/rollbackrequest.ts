import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackRequest
/** 
 * The request for Datastore.Rollback.
**/
export class RollbackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
