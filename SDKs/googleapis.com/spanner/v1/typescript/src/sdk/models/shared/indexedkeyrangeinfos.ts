import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeInfos } from "./keyrangeinfos";



// IndexedKeyRangeInfos
/** 
 * A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.
**/
export class IndexedKeyRangeInfos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyRangeInfos", elemType: KeyRangeInfos })
  keyRangeInfos?: Map<string, KeyRangeInfos>;
}
