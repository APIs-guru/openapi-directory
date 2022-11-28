import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.
**/
export declare class MultiClusterRoutingUseAny extends SpeakeasyBase {
    clusterIds?: string[];
}
