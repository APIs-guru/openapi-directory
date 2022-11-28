import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionId } from "./partitionid";
import { PathElement } from "./pathelement";



// Key
/** 
 * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
**/
export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitionId" })
  partitionId?: PartitionId;

  @SpeakeasyMetadata({ data: "json, name=path", elemType: PathElement })
  path?: PathElement[];
}
