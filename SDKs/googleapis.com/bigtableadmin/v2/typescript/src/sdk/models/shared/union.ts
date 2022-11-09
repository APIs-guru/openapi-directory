import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GcRule } from "./gcrule";


// Union
/** 
 * A GcRule which deletes cells matching any of the given rules.
**/
export class Union extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.GcRule })
  rules?: GcRule[];
}
