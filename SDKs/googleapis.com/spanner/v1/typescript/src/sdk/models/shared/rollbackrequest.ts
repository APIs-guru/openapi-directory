import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackRequest
/** 
 * The request for Rollback.
**/
export class RollbackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
