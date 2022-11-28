import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteRouteAction } from "./grpcrouterouteaction";
import { GrpcRouteRouteMatch } from "./grpcrouteroutematch";
/**
 * Describes how to route traffic.
**/
export declare class GrpcRouteRouteRule extends SpeakeasyBase {
    action?: GrpcRouteRouteAction;
    matches?: GrpcRouteRouteMatch[];
}
