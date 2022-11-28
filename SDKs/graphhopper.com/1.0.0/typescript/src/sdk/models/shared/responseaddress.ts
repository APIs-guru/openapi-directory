import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnappedWaypoint } from "./snappedwaypoint";



// ResponseAddress
/** 
 * Address of activity
**/
export class ResponseAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=snapped_waypoint" })
  snappedWaypoint?: SnappedWaypoint;

  @SpeakeasyMetadata({ data: "json, name=street_hint" })
  streetHint?: string;
}
