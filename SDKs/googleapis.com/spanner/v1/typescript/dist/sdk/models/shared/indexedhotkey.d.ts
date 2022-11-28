import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message representing a (sparse) collection of hot keys for specific key buckets.
**/
export declare class IndexedHotKey extends SpeakeasyBase {
    sparseHotKeys?: Map<string, number>;
}
