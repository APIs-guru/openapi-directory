import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetReference } from "./targetreference";
import { TargetReference } from "./targetreference";


// Move
/** 
 * An object was moved.
**/
export class Move extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedParents", elemType: shared.TargetReference })
  addedParents?: TargetReference[];

  @Metadata({ data: "json, name=removedParents", elemType: shared.TargetReference })
  removedParents?: TargetReference[];
}
