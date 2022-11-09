import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";


// RrSetRoutingPolicyWrrPolicyWrrPolicyItem
/** 
 * A routing block which contains the routing information for one WRR item.
**/
export class RrSetRoutingPolicyWrrPolicyWrrPolicyItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthCheckedTargets" })
  healthCheckedTargets?: RrSetRoutingPolicyHealthCheckTargets;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=rrdatas" })
  rrdatas?: string[];

  @Metadata({ data: "json, name=signatureRrdatas" })
  signatureRrdatas?: string[];

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
