import { SpeakeasyBase } from "../../../internal/utils";
import { UsableSubnetworkSecondaryRange } from "./usablesubnetworksecondaryrange";
/**
 * UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
**/
export declare class UsableSubnetwork extends SpeakeasyBase {
    ipCidrRange?: string;
    network?: string;
    secondaryIpRanges?: UsableSubnetworkSecondaryRange[];
    statusMessage?: string;
    subnetwork?: string;
}
