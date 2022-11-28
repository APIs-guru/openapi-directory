import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { User } from "./user";
import { Post } from "./post";
import { Suggestion } from "./suggestion";
/**
 * A change about comments on an object.
**/
export declare class Comment extends SpeakeasyBase {
    assignment?: Assignment;
    mentionedUsers?: User[];
    post?: Post;
    suggestion?: Suggestion;
}
