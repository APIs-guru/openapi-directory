import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
/**
 * A collection of links, which are references from this span to a span in the same or different trace.
**/
export declare class Links extends SpeakeasyBase {
    droppedLinksCount?: number;
    link?: Link[];
}
