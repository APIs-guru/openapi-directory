import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnappedWaypoint } from "./snappedwaypoint";


// ResponseAddress
/** 
 * Address of activity
**/
export class ResponseAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=snapped_waypoint" })
  snappedWaypoint?: SnappedWaypoint;

  @Metadata({ data: "json, name=street_hint" })
  streetHint?: string;
}
