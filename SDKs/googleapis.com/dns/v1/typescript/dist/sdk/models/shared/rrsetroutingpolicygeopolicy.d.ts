import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyGeoPolicyGeoPolicyItem } from "./rrsetroutingpolicygeopolicygeopolicyitem";
/**
 * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
**/
export declare class RrSetRoutingPolicyGeoPolicy extends SpeakeasyBase {
    enableFencing?: boolean;
    items?: RrSetRoutingPolicyGeoPolicyGeoPolicyItem[];
    kind?: string;
}
