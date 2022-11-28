import { SpeakeasyBase } from "../../../internal/utils";
import { Reply } from "./reply";
/**
 * A list of replies to a comment on a file.
**/
export declare class ReplyList extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    replies?: Reply[];
}
