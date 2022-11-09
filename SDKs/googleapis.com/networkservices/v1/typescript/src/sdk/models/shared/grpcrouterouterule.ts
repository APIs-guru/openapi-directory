import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrpcRouteRouteAction } from "./grpcrouterouteaction";
import { GrpcRouteRouteMatch } from "./grpcrouteroutematch";


// GrpcRouteRouteRule
/** 
 * Describes how to route traffic.
**/
export class GrpcRouteRouteRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: GrpcRouteRouteAction;

  @Metadata({ data: "json, name=matches", elemType: shared.GrpcRouteRouteMatch })
  matches?: GrpcRouteRouteMatch[];
}
