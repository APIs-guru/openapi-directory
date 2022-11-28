import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Source } from "./source";



// Rule
/** 
 * Specification of rules.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: Destination })
  destinations?: Destination[];

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];
}
