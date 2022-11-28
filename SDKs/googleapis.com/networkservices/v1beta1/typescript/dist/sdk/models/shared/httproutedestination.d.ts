import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifications of a destination to which the request should be routed to.
**/
export declare class HttpRouteDestination extends SpeakeasyBase {
    serviceName?: string;
    weight?: number;
}
