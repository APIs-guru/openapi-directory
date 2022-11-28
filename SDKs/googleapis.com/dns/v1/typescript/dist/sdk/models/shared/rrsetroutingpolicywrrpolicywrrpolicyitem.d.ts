import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";
/**
 * A routing block which contains the routing information for one WRR item.
**/
export declare class RrSetRoutingPolicyWrrPolicyWrrPolicyItem extends SpeakeasyBase {
    healthCheckedTargets?: RrSetRoutingPolicyHealthCheckTargets;
    kind?: string;
    rrdatas?: string[];
    signatureRrdatas?: string[];
    weight?: number;
}
