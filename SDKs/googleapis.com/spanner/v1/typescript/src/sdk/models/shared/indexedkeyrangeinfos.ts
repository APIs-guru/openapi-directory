import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyRangeInfos } from "./keyrangeinfos";


// IndexedKeyRangeInfos
/** 
 * A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.
**/
export class IndexedKeyRangeInfos extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyRangeInfos", elemType: shared.KeyRangeInfos })
  keyRangeInfos?: Map<string, KeyRangeInfos>;
}
