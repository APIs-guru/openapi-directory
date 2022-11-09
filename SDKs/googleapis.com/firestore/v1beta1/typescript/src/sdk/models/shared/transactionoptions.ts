import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";


// TransactionOptions
/** 
 * Options for creating a new transaction.
**/
export class TransactionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=readOnly" })
  readOnly?: ReadOnly;

  @Metadata({ data: "json, name=readWrite" })
  readWrite?: ReadWrite;
}
