import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InternalRangeOverlapsEnum {
    OverlapUnspecified = "OVERLAP_UNSPECIFIED",
    OverlapRouteRange = "OVERLAP_ROUTE_RANGE"
}
export declare enum InternalRangePeeringEnum {
    PeeringUnspecified = "PEERING_UNSPECIFIED",
    ForSelf = "FOR_SELF",
    ForPeer = "FOR_PEER",
    NotShared = "NOT_SHARED"
}
export declare enum InternalRangeUsageEnum {
    UsageUnspecified = "USAGE_UNSPECIFIED",
    ForVpc = "FOR_VPC",
    ExternalToVpc = "EXTERNAL_TO_VPC"
}
/**
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
export declare class InternalRangeInput extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    ipCidrRange?: string;
    labels?: Map<string, string>;
    name?: string;
    network?: string;
    overlaps?: InternalRangeOverlapsEnum[];
    peering?: InternalRangePeeringEnum;
    prefixLength?: number;
    targetCidrRange?: string[];
    updateTime?: string;
    usage?: InternalRangeUsageEnum;
}
/**
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
export declare class InternalRange extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    ipCidrRange?: string;
    labels?: Map<string, string>;
    name?: string;
    network?: string;
    overlaps?: InternalRangeOverlapsEnum[];
    peering?: InternalRangePeeringEnum;
    prefixLength?: number;
    targetCidrRange?: string[];
    updateTime?: string;
    usage?: InternalRangeUsageEnum;
    users?: string[];
}
