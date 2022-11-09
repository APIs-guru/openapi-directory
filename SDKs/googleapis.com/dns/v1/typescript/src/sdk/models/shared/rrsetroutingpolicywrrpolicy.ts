import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RrSetRoutingPolicyWrrPolicyWrrPolicyItem } from "./rrsetroutingpolicywrrpolicywrrpolicyitem";


// RrSetRoutingPolicyWrrPolicy
/** 
 * Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
**/
export class RrSetRoutingPolicyWrrPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem })
  items?: RrSetRoutingPolicyWrrPolicyWrrPolicyItem[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
