import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SuggestionSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED"
,    Added = "ADDED"
,    Deleted = "DELETED"
,    ReplyAdded = "REPLY_ADDED"
,    ReplyDeleted = "REPLY_DELETED"
,    Accepted = "ACCEPTED"
,    Rejected = "REJECTED"
,    AcceptDeleted = "ACCEPT_DELETED"
,    RejectDeleted = "REJECT_DELETED"
}


// Suggestion
/** 
 * A suggestion.
**/
export class Suggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=subtype" })
  subtype?: SuggestionSubtypeEnum;
}
