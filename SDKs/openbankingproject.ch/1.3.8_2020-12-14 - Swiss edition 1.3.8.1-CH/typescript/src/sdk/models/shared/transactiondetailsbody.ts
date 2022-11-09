import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Transactions } from "./transactions";


// TransactionDetailsBody
/** 
 * Transaction details.
**/
export class TransactionDetailsBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionDetails" })
  transactionDetails: Transactions;
}
