import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackRequest
/** 
 * The request for Rollback.
**/
export class RollbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
