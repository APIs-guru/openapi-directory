import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteDestination } from "./tcprouteroutedestination";
/**
 * The specifications for routing traffic and applying associated policies.
**/
export declare class TcpRouteRouteAction extends SpeakeasyBase {
    destinations?: TcpRouteRouteDestination[];
    originalDestination?: boolean;
}
