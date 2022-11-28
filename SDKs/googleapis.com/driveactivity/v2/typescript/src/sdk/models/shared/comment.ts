import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { User } from "./user";
import { Post } from "./post";
import { Suggestion } from "./suggestion";



// Comment
/** 
 * A change about comments on an object.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @SpeakeasyMetadata({ data: "json, name=mentionedUsers", elemType: User })
  mentionedUsers?: User[];

  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: Post;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: Suggestion;
}
