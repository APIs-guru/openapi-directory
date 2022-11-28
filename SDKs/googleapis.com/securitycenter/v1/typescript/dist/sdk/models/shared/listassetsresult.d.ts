import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
export declare enum ListAssetsResultStateChangeEnum {
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
    stateChange?: ListAssetsResultStateChangeEnum;
}
