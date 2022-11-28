import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";
/**
 * Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
**/
export declare class RrSetRoutingPolicyPrimaryBackupPolicy extends SpeakeasyBase {
    backupGeoTargets?: RrSetRoutingPolicyGeoPolicy;
    kind?: string;
    primaryTargets?: RrSetRoutingPolicyHealthCheckTargets;
    trickleTraffic?: number;
}
