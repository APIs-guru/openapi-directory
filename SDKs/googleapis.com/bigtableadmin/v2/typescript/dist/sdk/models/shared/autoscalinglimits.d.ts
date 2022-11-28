import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Limits for the number of nodes a Cluster can autoscale up/down to.
**/
export declare class AutoscalingLimits extends SpeakeasyBase {
    maxServeNodes?: number;
    minServeNodes?: number;
}
