import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlacementPolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Compact = "COMPACT"
}
/**
 * PlacementPolicy defines the placement policy used by the node pool.
**/
export declare class PlacementPolicy extends SpeakeasyBase {
    type?: PlacementPolicyTypeEnum;
}
