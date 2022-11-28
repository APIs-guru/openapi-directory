import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackRequest
/** 
 * The request for Firestore.Rollback.
**/
export class RollbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
