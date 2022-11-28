import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Intersection } from "./intersection";
import { Union } from "./union";



// GcRule
/** 
 * Rule for determining which cells to delete during garbage collection.
**/
export class GcRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intersection" })
  intersection?: Intersection;

  @SpeakeasyMetadata({ data: "json, name=maxAge" })
  maxAge?: string;

  @SpeakeasyMetadata({ data: "json, name=maxNumVersions" })
  maxNumVersions?: number;

  @SpeakeasyMetadata({ data: "json, name=union" })
  union?: Union;
}
