import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlacementPolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Compact = "COMPACT"
}


// PlacementPolicy
/** 
 * PlacementPolicy defines the placement policy used by the node pool.
**/
export class PlacementPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: PlacementPolicyTypeEnum;
}
