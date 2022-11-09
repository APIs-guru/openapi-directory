import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
**/
export declare class PrivateClusterConfig extends SpeakeasyBase {
    enablePrivateEndpoint?: boolean;
    masterIpv4CidrBlock?: string;
    masterIpv4ReservedRange?: string;
}
