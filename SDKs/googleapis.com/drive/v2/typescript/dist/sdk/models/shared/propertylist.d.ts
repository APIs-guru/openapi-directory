import { SpeakeasyBase } from "../../../internal/utils";
import { Property } from "./property";
/**
 * A collection of properties, key-value pairs that are either public or private to an application.
**/
export declare class PropertyList extends SpeakeasyBase {
    etag?: string;
    items?: Property[];
    kind?: string;
    selfLink?: string;
}
