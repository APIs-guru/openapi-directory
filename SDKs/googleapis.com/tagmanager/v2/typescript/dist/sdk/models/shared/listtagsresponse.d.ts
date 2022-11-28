import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * List Tags Response.
**/
export declare class ListTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tag?: Tag[];
}
