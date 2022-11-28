import { SpeakeasyBase } from "../../../internal/utils";
/**
 * NetworkInterface represents a NIC of a VM.
**/
export declare class NetworkInterface extends SpeakeasyBase {
    externalIp?: string;
    internalIp?: string;
    network?: string;
    subnetwork?: string;
}
