import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";



// TransactionOptions
/** 
 * Options for creating a new transaction.
**/
export class TransactionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: ReadOnly;

  @SpeakeasyMetadata({ data: "json, name=readWrite" })
  readWrite?: ReadWrite;
}
