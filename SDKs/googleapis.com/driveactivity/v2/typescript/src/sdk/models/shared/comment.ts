import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Assignment } from "./assignment";
import { User } from "./user";
import { Post } from "./post";
import { Suggestion } from "./suggestion";


// Comment
/** 
 * A change about comments on an object.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @Metadata({ data: "json, name=mentionedUsers", elemType: shared.User })
  mentionedUsers?: User[];

  @Metadata({ data: "json, name=post" })
  post?: Post;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: Suggestion;
}
