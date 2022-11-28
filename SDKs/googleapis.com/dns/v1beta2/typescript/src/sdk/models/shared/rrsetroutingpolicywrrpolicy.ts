import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyWrrPolicyWrrPolicyItem } from "./rrsetroutingpolicywrrpolicywrrpolicyitem";



// RrSetRoutingPolicyWrrPolicy
/** 
 * Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
**/
export class RrSetRoutingPolicyWrrPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RrSetRoutingPolicyWrrPolicyWrrPolicyItem })
  items?: RrSetRoutingPolicyWrrPolicyWrrPolicyItem[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
