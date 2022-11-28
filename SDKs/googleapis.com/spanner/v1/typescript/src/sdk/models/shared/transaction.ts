import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Transaction
/** 
 * A transaction.
**/
export class Transaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=readTimestamp" })
  readTimestamp?: string;
}
