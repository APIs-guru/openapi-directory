import { SpeakeasyBase } from "../../../internal/utils";
import { ParentReference } from "./parentreference";
/**
 * A list of a file's parents.
**/
export declare class ParentList extends SpeakeasyBase {
    etag?: string;
    items?: ParentReference[];
    kind?: string;
    selfLink?: string;
}
