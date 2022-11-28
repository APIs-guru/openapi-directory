import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Transactions } from "./transactions";



// TransactionDetailsBody
/** 
 * Transaction details.
**/
export class TransactionDetailsBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionDetails" })
  transactionDetails: Transactions;
}
