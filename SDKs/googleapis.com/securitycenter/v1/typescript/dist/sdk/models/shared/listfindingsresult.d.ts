import { SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";
import { Resource } from "./resource";
export declare enum ListFindingsResultStateChangeEnum {
    Unused = "UNUSED",
    Changed = "CHANGED",
    Unchanged = "UNCHANGED",
    Added = "ADDED",
    Removed = "REMOVED"
}
/**
 * Result containing the Finding and its StateChange.
**/
export declare class ListFindingsResult extends SpeakeasyBase {
    finding?: Finding;
    resource?: Resource;
    stateChange?: ListFindingsResultStateChangeEnum;
}
