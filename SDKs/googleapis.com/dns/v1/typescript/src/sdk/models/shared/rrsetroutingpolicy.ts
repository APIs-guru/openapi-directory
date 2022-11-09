import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RrSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RrSetRoutingPolicyPrimaryBackupPolicy } from "./rrsetroutingpolicyprimarybackuppolicy";
import { RrSetRoutingPolicyWrrPolicy } from "./rrsetroutingpolicywrrpolicy";


// RrSetRoutingPolicy
/** 
 * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
**/
export class RrSetRoutingPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=geo" })
  geo?: RrSetRoutingPolicyGeoPolicy;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=primaryBackup" })
  primaryBackup?: RrSetRoutingPolicyPrimaryBackupPolicy;

  @Metadata({ data: "json, name=wrr" })
  wrr?: RrSetRoutingPolicyWrrPolicy;
}
