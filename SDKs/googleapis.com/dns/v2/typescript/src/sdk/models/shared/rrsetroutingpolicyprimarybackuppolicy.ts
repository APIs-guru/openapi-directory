import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";



// RrSetRoutingPolicyPrimaryBackupPolicy
/** 
 * Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
**/
export class RrSetRoutingPolicyPrimaryBackupPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupGeoTargets" })
  backupGeoTargets?: RrSetRoutingPolicyGeoPolicy;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryTargets" })
  primaryTargets?: RrSetRoutingPolicyHealthCheckTargets;

  @SpeakeasyMetadata({ data: "json, name=trickleTraffic" })
  trickleTraffic?: number;
}
