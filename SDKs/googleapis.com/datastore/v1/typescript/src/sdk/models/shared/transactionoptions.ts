import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";



// TransactionOptions
/** 
 * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
**/
export class TransactionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: ReadOnly;

  @SpeakeasyMetadata({ data: "json, name=readWrite" })
  readWrite?: ReadWrite;
}
