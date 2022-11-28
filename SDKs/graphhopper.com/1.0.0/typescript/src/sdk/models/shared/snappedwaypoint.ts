import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnappedWaypoint
/** 
 * Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
**/
export class SnappedWaypoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}
