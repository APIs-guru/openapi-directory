import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackRequest
/** 
 * The request for Datastore.Rollback.
**/
export class RollbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
