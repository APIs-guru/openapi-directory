import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficTarget } from "./traffictarget";



// RouteSpec
/** 
 * RouteSpec holds the desired state of the Route (from the client).
**/
export class RouteSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTarget })
  traffic?: TrafficTarget[];
}
