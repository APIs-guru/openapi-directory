import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
import { StructuredQuery } from "./structuredquery";



// RunQueryRequest
/** 
 * The request for Firestore.RunQuery.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newTransaction" })
  newTransaction?: TransactionOptions;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
