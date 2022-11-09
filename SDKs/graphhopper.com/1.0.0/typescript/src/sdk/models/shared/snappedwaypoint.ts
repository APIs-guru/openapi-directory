import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnappedWaypoint
/** 
 * Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
**/
export class SnappedWaypoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;
}
