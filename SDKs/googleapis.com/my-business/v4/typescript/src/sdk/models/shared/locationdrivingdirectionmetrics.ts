import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopDirectionSources } from "./topdirectionsources";



// LocationDrivingDirectionMetrics
/** 
 * A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
**/
export class LocationDrivingDirectionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=topDirectionSources", elemType: TopDirectionSources })
  topDirectionSources?: TopDirectionSources[];
}
