import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlacementPolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Compact = "COMPACT"
}


// PlacementPolicy
/** 
 * PlacementPolicy defines the placement policy used by the node pool.
**/
export class PlacementPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PlacementPolicyTypeEnum;
}
