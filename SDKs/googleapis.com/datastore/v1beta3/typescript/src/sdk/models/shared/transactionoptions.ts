import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";


// TransactionOptions
/** 
 * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
**/
export class TransactionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=readOnly" })
  readOnly?: ReadOnly;

  @Metadata({ data: "json, name=readWrite" })
  readWrite?: ReadWrite;
}
