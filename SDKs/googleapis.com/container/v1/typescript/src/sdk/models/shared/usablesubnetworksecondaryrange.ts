import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsableSubnetworkSecondaryRangeStatusEnum {
    Unknown = "UNKNOWN",
    Unused = "UNUSED",
    InUseService = "IN_USE_SERVICE",
    InUseShareablePod = "IN_USE_SHAREABLE_POD",
    InUseManagedPod = "IN_USE_MANAGED_POD"
}


// UsableSubnetworkSecondaryRange
/** 
 * Secondary IP range of a usable subnetwork.
**/
export class UsableSubnetworkSecondaryRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeName" })
  rangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UsableSubnetworkSecondaryRangeStatusEnum;
}
