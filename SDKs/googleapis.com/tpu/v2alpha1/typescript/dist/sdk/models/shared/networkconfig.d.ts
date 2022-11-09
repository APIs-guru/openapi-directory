import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Network related configurations.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    canIpForward?: boolean;
    enableExternalIps?: boolean;
    network?: string;
    subnetwork?: string;
}
