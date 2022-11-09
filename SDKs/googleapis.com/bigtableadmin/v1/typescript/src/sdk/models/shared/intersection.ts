import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GcRule } from "./gcrule";


// Intersection
/** 
 * A GcRule which deletes cells matching all of the given rules.
**/
export class Intersection extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.GcRule })
  rules?: GcRule[];
}
