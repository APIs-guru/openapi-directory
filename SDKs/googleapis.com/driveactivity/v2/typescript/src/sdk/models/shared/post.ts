import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED",
    Added = "ADDED",
    Deleted = "DELETED",
    ReplyAdded = "REPLY_ADDED",
    ReplyDeleted = "REPLY_DELETED",
    Resolved = "RESOLVED",
    Reopened = "REOPENED"
}


// Post
/** 
 * A regular posted comment.
**/
export class Post extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: PostSubtypeEnum;
}
