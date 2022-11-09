import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TopDirectionSources } from "./topdirectionsources";


// LocationDrivingDirectionMetrics
/** 
 * A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
**/
export class LocationDrivingDirectionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationName" })
  locationName?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=topDirectionSources", elemType: shared.TopDirectionSources })
  topDirectionSources?: TopDirectionSources[];
}
