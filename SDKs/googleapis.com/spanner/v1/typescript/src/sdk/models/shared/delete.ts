import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeySet } from "./keyset";


// Delete
/** 
 * Arguments to delete operations.
**/
export class Delete extends SpeakeasyBase {
  @Metadata({ data: "json, name=keySet" })
  keySet?: KeySet;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
