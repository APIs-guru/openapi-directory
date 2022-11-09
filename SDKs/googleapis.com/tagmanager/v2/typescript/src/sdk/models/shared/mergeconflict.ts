import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";
import { Entity } from "./entity";


// MergeConflict
/** 
 * Represents a merge conflict.
**/
export class MergeConflict extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityInBaseVersion" })
  entityInBaseVersion?: Entity;

  @Metadata({ data: "json, name=entityInWorkspace" })
  entityInWorkspace?: Entity;
}
