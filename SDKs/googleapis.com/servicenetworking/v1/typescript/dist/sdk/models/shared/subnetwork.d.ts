import { SpeakeasyBase } from "../../../internal/utils";
import { SecondaryIpRange } from "./secondaryiprange";
/**
 * Represents a subnet that was created or discovered by a private access management service.
**/
export declare class Subnetwork extends SpeakeasyBase {
    ipCidrRange?: string;
    name?: string;
    network?: string;
    outsideAllocation?: boolean;
    region?: string;
    secondaryIpRanges?: SecondaryIpRange[];
}
