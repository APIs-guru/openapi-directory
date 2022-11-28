import { SpeakeasyBase } from "../../../internal/utils";
import { MultiClusterRoutingUseAny } from "./multiclusterroutinguseany";
import { SingleClusterRouting } from "./singleclusterrouting";
/**
 * A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
**/
export declare class AppProfile extends SpeakeasyBase {
    description?: string;
    etag?: string;
    multiClusterRoutingUseAny?: MultiClusterRoutingUseAny;
    name?: string;
    singleClusterRouting?: SingleClusterRouting;
}
