import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyRange } from "./keyrange";


// KeySet
/** 
 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once.
**/
export class KeySet extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: boolean;

  @Metadata({ data: "json, name=keys" })
  keys?: any[][];

  @Metadata({ data: "json, name=ranges", elemType: shared.KeyRange })
  ranges?: KeyRange[];
}
