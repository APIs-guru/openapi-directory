import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeInfos } from "./keyrangeinfos";
/**
 * A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.
**/
export declare class IndexedKeyRangeInfos extends SpeakeasyBase {
    keyRangeInfos?: Map<string, KeyRangeInfos>;
}
