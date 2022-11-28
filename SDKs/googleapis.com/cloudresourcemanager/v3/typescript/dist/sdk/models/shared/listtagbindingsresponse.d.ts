import { SpeakeasyBase } from "../../../internal/utils";
import { TagBinding } from "./tagbinding";
/**
 * The ListTagBindings response.
**/
export declare class ListTagBindingsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tagBindings?: TagBinding[];
}
