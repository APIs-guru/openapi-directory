import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";
/**
 * ResourceRecordSet data for one geo location.
**/
export declare class RrSetRoutingPolicyGeoPolicyGeoPolicyItem extends SpeakeasyBase {
    healthCheckedTargets?: RrSetRoutingPolicyHealthCheckTargets;
    kind?: string;
    location?: string;
    rrdatas?: string[];
    signatureRrdatas?: string[];
}
