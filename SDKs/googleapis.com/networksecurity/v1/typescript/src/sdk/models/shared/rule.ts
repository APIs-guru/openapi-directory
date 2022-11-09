import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Destination } from "./destination";
import { Source } from "./source";


// Rule
/** 
 * Specification of rules.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.Destination })
  destinations?: Destination[];

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];
}
