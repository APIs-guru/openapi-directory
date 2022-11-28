import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeginTransactionResponse
/** 
 * The response for Firestore.BeginTransaction.
**/
export class BeginTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
