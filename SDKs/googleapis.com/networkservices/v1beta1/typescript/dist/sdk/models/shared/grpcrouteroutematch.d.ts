import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteHeaderMatch } from "./grpcrouteheadermatch";
import { GrpcRouteMethodMatch } from "./grpcroutemethodmatch";
/**
 * Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
**/
export declare class GrpcRouteRouteMatch extends SpeakeasyBase {
    headers?: GrpcRouteHeaderMatch[];
    method?: GrpcRouteMethodMatch;
}
