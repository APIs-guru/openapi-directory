import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficTarget } from "./traffictarget";
/**
 * RouteSpec holds the desired state of the Route (from the client).
**/
export declare class RouteSpec extends SpeakeasyBase {
    traffic?: TrafficTarget[];
}
