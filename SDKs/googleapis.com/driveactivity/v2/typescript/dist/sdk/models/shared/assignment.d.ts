import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare enum AssignmentSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED",
    Added = "ADDED",
    Deleted = "DELETED",
    ReplyAdded = "REPLY_ADDED",
    ReplyDeleted = "REPLY_DELETED",
    Resolved = "RESOLVED",
    Reopened = "REOPENED",
    Reassigned = "REASSIGNED"
}
/**
 * A comment with an assignment.
**/
export declare class Assignment extends SpeakeasyBase {
    assignedUser?: User;
    subtype?: AssignmentSubtypeEnum;
}
