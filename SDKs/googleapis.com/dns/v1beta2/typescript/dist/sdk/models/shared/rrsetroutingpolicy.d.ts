import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RrSetRoutingPolicyPrimaryBackupPolicy } from "./rrsetroutingpolicyprimarybackuppolicy";
import { RrSetRoutingPolicyWrrPolicy } from "./rrsetroutingpolicywrrpolicy";
/**
 * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
**/
export declare class RrSetRoutingPolicy extends SpeakeasyBase {
    geo?: RrSetRoutingPolicyGeoPolicy;
    geoPolicy?: RrSetRoutingPolicyGeoPolicy;
    kind?: string;
    primaryBackup?: RrSetRoutingPolicyPrimaryBackupPolicy;
    wrr?: RrSetRoutingPolicyWrrPolicy;
    wrrPolicy?: RrSetRoutingPolicyWrrPolicy;
}
