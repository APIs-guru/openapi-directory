import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Intersection } from "./intersection";
import { Union } from "./union";


// GcRule
/** 
 * Rule for determining which cells to delete during garbage collection.
**/
export class GcRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=intersection" })
  intersection?: Intersection;

  @Metadata({ data: "json, name=maxAge" })
  maxAge?: string;

  @Metadata({ data: "json, name=maxNumVersions" })
  maxNumVersions?: number;

  @Metadata({ data: "json, name=union" })
  union?: Union;
}
