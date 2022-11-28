import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



// MergeConflict
/** 
 * Represents a merge conflict.
**/
export class MergeConflict extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityInBaseVersion" })
  entityInBaseVersion?: Entity;

  @SpeakeasyMetadata({ data: "json, name=entityInWorkspace" })
  entityInWorkspace?: Entity;
}
