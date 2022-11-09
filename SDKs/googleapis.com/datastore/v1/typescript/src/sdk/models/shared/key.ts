import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionId } from "./partitionid";
import { PathElement } from "./pathelement";


// Key
/** 
 * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
**/
export class Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitionId" })
  partitionId?: PartitionId;

  @Metadata({ data: "json, name=path", elemType: shared.PathElement })
  path?: PathElement[];
}
