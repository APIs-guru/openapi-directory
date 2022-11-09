import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IndexedHotKey
/** 
 * A message representing a (sparse) collection of hot keys for specific key buckets.
**/
export class IndexedHotKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=sparseHotKeys" })
  sparseHotKeys?: Map<string, number>;
}
