import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Transaction
/** 
 * A transaction.
**/
export class Transaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=readTimestamp" })
  readTimestamp?: string;
}
