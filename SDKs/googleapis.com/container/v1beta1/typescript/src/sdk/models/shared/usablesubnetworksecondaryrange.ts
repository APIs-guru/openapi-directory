import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UsableSubnetworkSecondaryRangeStatusEnum {
    Unknown = "UNKNOWN"
,    Unused = "UNUSED"
,    InUseService = "IN_USE_SERVICE"
,    InUseShareablePod = "IN_USE_SHAREABLE_POD"
,    InUseManagedPod = "IN_USE_MANAGED_POD"
}


// UsableSubnetworkSecondaryRange
/** 
 * Secondary IP range of a usable subnetwork.
**/
export class UsableSubnetworkSecondaryRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @Metadata({ data: "json, name=rangeName" })
  rangeName?: string;

  @Metadata({ data: "json, name=status" })
  status?: UsableSubnetworkSecondaryRangeStatusEnum;
}
