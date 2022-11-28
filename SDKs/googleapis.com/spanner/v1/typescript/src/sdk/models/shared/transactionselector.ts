import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";



// TransactionSelector
/** 
 * This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.
**/
export class TransactionSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=begin" })
  begin?: TransactionOptions;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=singleUse" })
  singleUse?: TransactionOptions;
}
