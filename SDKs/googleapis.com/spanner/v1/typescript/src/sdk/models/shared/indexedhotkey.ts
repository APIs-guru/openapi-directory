import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IndexedHotKey
/** 
 * A message representing a (sparse) collection of hot keys for specific key buckets.
**/
export class IndexedHotKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sparseHotKeys" })
  sparseHotKeys?: Map<string, number>;
}
