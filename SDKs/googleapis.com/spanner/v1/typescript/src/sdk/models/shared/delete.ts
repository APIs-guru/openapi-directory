import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySet } from "./keyset";



// Delete
/** 
 * Arguments to delete operations.
**/
export class Delete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keySet" })
  keySet?: KeySet;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
