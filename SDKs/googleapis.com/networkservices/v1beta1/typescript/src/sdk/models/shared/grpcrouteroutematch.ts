import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrpcRouteHeaderMatch } from "./grpcrouteheadermatch";
import { GrpcRouteMethodMatch } from "./grpcroutemethodmatch";


// GrpcRouteRouteMatch
/** 
 * Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
**/
export class GrpcRouteRouteMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.GrpcRouteHeaderMatch })
  headers?: GrpcRouteHeaderMatch[];

  @Metadata({ data: "json, name=method" })
  method?: GrpcRouteMethodMatch;
}
