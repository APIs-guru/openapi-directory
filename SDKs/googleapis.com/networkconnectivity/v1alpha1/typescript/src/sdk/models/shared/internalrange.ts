import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InternalRangeOverlapsEnum {
    OverlapUnspecified = "OVERLAP_UNSPECIFIED",
    OverlapRouteRange = "OVERLAP_ROUTE_RANGE"
}

export enum InternalRangePeeringEnum {
    PeeringUnspecified = "PEERING_UNSPECIFIED",
    ForSelf = "FOR_SELF",
    ForPeer = "FOR_PEER",
    NotShared = "NOT_SHARED"
}

export enum InternalRangeUsageEnum {
    UsageUnspecified = "USAGE_UNSPECIFIED",
    ForVpc = "FOR_VPC",
    ExternalToVpc = "EXTERNAL_TO_VPC"
}


// InternalRangeInput
/** 
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
export class InternalRangeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=overlaps" })
  overlaps?: InternalRangeOverlapsEnum[];

  @SpeakeasyMetadata({ data: "json, name=peering" })
  peering?: InternalRangePeeringEnum;

  @SpeakeasyMetadata({ data: "json, name=prefixLength" })
  prefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=targetCidrRange" })
  targetCidrRange?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: InternalRangeUsageEnum;
}


// InternalRange
/** 
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
export class InternalRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=overlaps" })
  overlaps?: InternalRangeOverlapsEnum[];

  @SpeakeasyMetadata({ data: "json, name=peering" })
  peering?: InternalRangePeeringEnum;

  @SpeakeasyMetadata({ data: "json, name=prefixLength" })
  prefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=targetCidrRange" })
  targetCidrRange?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: InternalRangeUsageEnum;

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: string[];
}
