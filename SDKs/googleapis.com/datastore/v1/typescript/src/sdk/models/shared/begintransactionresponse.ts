import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeginTransactionResponse
/** 
 * The response for Datastore.BeginTransaction.
**/
export class BeginTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
