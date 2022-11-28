import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RrSetRoutingPolicyPrimaryBackupPolicy } from "./rrsetroutingpolicyprimarybackuppolicy";
import { RrSetRoutingPolicyWrrPolicy } from "./rrsetroutingpolicywrrpolicy";



// RrSetRoutingPolicy
/** 
 * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
**/
export class RrSetRoutingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geo" })
  geo?: RrSetRoutingPolicyGeoPolicy;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryBackup" })
  primaryBackup?: RrSetRoutingPolicyPrimaryBackupPolicy;

  @SpeakeasyMetadata({ data: "json, name=wrr" })
  wrr?: RrSetRoutingPolicyWrrPolicy;
}
