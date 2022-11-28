import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";



// RrSetRoutingPolicyWrrPolicyWrrPolicyItem
/** 
 * A routing block which contains the routing information for one WRR item.
**/
export class RrSetRoutingPolicyWrrPolicyWrrPolicyItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthCheckedTargets" })
  healthCheckedTargets?: RrSetRoutingPolicyHealthCheckTargets;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rrdatas" })
  rrdatas?: string[];

  @SpeakeasyMetadata({ data: "json, name=signatureRrdatas" })
  signatureRrdatas?: string[];

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
