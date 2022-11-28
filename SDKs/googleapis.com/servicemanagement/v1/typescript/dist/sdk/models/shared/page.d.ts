import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
**/
export declare class Page extends SpeakeasyBase {
    content?: string;
    name?: string;
    subpages?: Page[];
}
