import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetReference } from "./targetreference";



// Move
/** 
 * An object was moved.
**/
export class Move extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedParents", elemType: TargetReference })
  addedParents?: TargetReference[];

  @SpeakeasyMetadata({ data: "json, name=removedParents", elemType: TargetReference })
  removedParents?: TargetReference[];
}
