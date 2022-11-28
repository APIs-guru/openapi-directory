import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifications to match a query parameter in the request.
**/
export declare class HttpRouteQueryParameterMatch extends SpeakeasyBase {
    exactMatch?: string;
    presentMatch?: boolean;
    queryParameter?: string;
    regexMatch?: string;
}
