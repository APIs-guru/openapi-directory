import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateClusterMasterGlobalAccessConfig } from "./privateclustermasterglobalaccessconfig";
/**
 * Configuration options for private clusters.
**/
export declare class PrivateClusterConfig extends SpeakeasyBase {
    enablePrivateEndpoint?: boolean;
    enablePrivateNodes?: boolean;
    masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;
    masterIpv4CidrBlock?: string;
    peeringName?: string;
    privateEndpoint?: string;
    privateEndpointSubnetwork?: string;
    publicEndpoint?: string;
}
