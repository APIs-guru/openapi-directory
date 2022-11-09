import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionOptions } from "./transactionoptions";
import { StructuredQuery } from "./structuredquery";


// RunQueryRequest
/** 
 * The request for Firestore.RunQuery.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newTransaction" })
  newTransaction?: TransactionOptions;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
