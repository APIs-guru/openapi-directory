import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Autoscaling targets for a Cluster. These determine the recommended nodes.
**/
export declare class AutoscalingTargets extends SpeakeasyBase {
    cpuUtilizationPercent?: number;
    storageUtilizationGibPerNode?: number;
}
