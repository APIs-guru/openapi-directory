import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPerformanceConfig } from "./networkperformanceconfig";
/**
 * Parameters for node pool-level network config.
**/
export declare class NodeNetworkConfig extends SpeakeasyBase {
    createPodRange?: boolean;
    enablePrivateNodes?: boolean;
    networkPerformanceConfig?: NetworkPerformanceConfig;
    podIpv4CidrBlock?: string;
    podRange?: string;
}
