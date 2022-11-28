import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * The response message for the ListComments endpoint.
**/
export declare class ListCommentsResponse extends SpeakeasyBase {
    comments?: Comment[];
    nextPageToken?: string;
}
