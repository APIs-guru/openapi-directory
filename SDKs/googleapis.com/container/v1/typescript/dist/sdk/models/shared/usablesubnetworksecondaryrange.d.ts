import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsableSubnetworkSecondaryRangeStatusEnum {
    Unknown = "UNKNOWN",
    Unused = "UNUSED",
    InUseService = "IN_USE_SERVICE",
    InUseShareablePod = "IN_USE_SHAREABLE_POD",
    InUseManagedPod = "IN_USE_MANAGED_POD"
}
/**
 * Secondary IP range of a usable subnetwork.
**/
export declare class UsableSubnetworkSecondaryRange extends SpeakeasyBase {
    ipCidrRange?: string;
    rangeName?: string;
    status?: UsableSubnetworkSecondaryRangeStatusEnum;
}
