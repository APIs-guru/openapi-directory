import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcRule } from "./gcrule";



// Union
/** 
 * A GcRule which deletes cells matching any of the given rules.
**/
export class Union extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GcRule })
  rules?: GcRule[];
}
