import { SpeakeasyBase } from "../../../internal/utils";
import { SecondaryIpRangeSpec } from "./secondaryiprangespec";
/**
 * Request to create a subnetwork in a previously peered service network.
**/
export declare class AddSubnetworkRequest extends SpeakeasyBase {
    checkServiceNetworkingUsePermission?: boolean;
    computeIdempotencyWindow?: string;
    consumer?: string;
    consumerNetwork?: string;
    description?: string;
    ipPrefixLength?: number;
    outsideAllocationPublicIpRange?: string;
    privateIpv6GoogleAccess?: string;
    purpose?: string;
    region?: string;
    requestedAddress?: string;
    requestedRanges?: string[];
    secondaryIpRangeSpecs?: SecondaryIpRangeSpec[];
    subnetwork?: string;
    subnetworkUsers?: string[];
    useCustomComputeIdempotencyWindow?: boolean;
}
