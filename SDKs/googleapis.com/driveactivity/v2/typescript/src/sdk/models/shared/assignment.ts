import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";

export enum AssignmentSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED"
,    Added = "ADDED"
,    Deleted = "DELETED"
,    ReplyAdded = "REPLY_ADDED"
,    ReplyDeleted = "REPLY_DELETED"
,    Resolved = "RESOLVED"
,    Reopened = "REOPENED"
,    Reassigned = "REASSIGNED"
}


// Assignment
/** 
 * A comment with an assignment.
**/
export class Assignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedUser" })
  assignedUser?: User;

  @Metadata({ data: "json, name=subtype" })
  subtype?: AssignmentSubtypeEnum;
}
