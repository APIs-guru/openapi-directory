import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";
export declare enum ListAssetsResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Unused = "UNUSED",
    Added = "ADDED",
    Removed = "REMOVED",
    Active = "ACTIVE"
}
/**
 * Result containing the Asset and its State.
**/
export declare class ListAssetsResult extends SpeakeasyBase {
    asset?: Asset;
    state?: ListAssetsResultStateEnum;
}
