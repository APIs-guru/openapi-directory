import { SpeakeasyBase } from "../../../internal/utils";
import { ChildReference } from "./childreference";
/**
 * A list of children of a file.
**/
export declare class ChildList extends SpeakeasyBase {
    etag?: string;
    items?: ChildReference[];
    kind?: string;
    nextLink?: string;
    nextPageToken?: string;
    selfLink?: string;
}
