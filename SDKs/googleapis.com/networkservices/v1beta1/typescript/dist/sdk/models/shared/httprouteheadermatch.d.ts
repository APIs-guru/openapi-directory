import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeaderMatchIntegerRange } from "./httprouteheadermatchintegerrange";
/**
 * Specifies how to select a route rule based on HTTP request headers.
**/
export declare class HttpRouteHeaderMatch extends SpeakeasyBase {
    exactMatch?: string;
    header?: string;
    invertMatch?: boolean;
    prefixMatch?: string;
    presentMatch?: boolean;
    rangeMatch?: HttpRouteHeaderMatchIntegerRange;
    regexMatch?: string;
    suffixMatch?: string;
}
