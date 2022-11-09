import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BeginTransactionResponse
/** 
 * The response for Datastore.BeginTransaction.
**/
export class BeginTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
