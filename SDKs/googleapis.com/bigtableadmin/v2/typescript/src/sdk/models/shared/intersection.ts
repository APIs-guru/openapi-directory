import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcRule } from "./gcrule";



// Intersection
/** 
 * A GcRule which deletes cells matching all of the given rules.
**/
export class Intersection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GcRule })
  rules?: GcRule[];
}
