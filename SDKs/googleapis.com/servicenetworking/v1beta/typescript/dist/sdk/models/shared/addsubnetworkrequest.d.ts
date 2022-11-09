import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request to create a subnetwork in a previously peered service network.
**/
export declare class AddSubnetworkRequest extends SpeakeasyBase {
    consumer?: string;
    consumerNetwork?: string;
    description?: string;
    ipPrefixLength?: number;
    region?: string;
    requestedAddress?: string;
    subnetwork?: string;
    subnetworkUsers?: string[];
}
