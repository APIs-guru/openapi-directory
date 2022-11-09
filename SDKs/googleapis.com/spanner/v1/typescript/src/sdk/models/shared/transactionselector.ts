import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionOptions } from "./transactionoptions";
import { TransactionOptions } from "./transactionoptions";


// TransactionSelector
/** 
 * This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.
**/
export class TransactionSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=begin" })
  begin?: TransactionOptions;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=singleUse" })
  singleUse?: TransactionOptions;
}
