import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteHeaderMatch } from "./grpcrouteheadermatch";
import { GrpcRouteMethodMatch } from "./grpcroutemethodmatch";



// GrpcRouteRouteMatch
/** 
 * Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
**/
export class GrpcRouteRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: GrpcRouteHeaderMatch })
  headers?: GrpcRouteHeaderMatch[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: GrpcRouteMethodMatch;
}
