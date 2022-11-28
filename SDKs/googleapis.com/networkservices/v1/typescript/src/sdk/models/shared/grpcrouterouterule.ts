import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteRouteAction } from "./grpcrouterouteaction";
import { GrpcRouteRouteMatch } from "./grpcrouteroutematch";



// GrpcRouteRouteRule
/** 
 * Describes how to route traffic.
**/
export class GrpcRouteRouteRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: GrpcRouteRouteAction;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: GrpcRouteRouteMatch })
  matches?: GrpcRouteRouteMatch[];
}
