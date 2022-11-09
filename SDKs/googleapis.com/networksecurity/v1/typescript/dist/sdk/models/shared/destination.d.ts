import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpHeaderMatch } from "./httpheadermatch";
/**
 * Specification of traffic destination attributes.
**/
export declare class Destination extends SpeakeasyBase {
    hosts?: string[];
    httpHeaderMatch?: HttpHeaderMatch;
    methods?: string[];
    ports?: number[];
}
