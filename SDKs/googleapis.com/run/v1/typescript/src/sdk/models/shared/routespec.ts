import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrafficTarget } from "./traffictarget";


// RouteSpec
/** 
 * RouteSpec holds the desired state of the Route (from the client).
**/
export class RouteSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=traffic", elemType: shared.TrafficTarget })
  traffic?: TrafficTarget[];
}
