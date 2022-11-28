import { SpeakeasyBase } from "../../../internal/utils";
import { TopDirectionSources } from "./topdirectionsources";
/**
 * A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
**/
export declare class LocationDrivingDirectionMetrics extends SpeakeasyBase {
    locationName?: string;
    timeZone?: string;
    topDirectionSources?: TopDirectionSources[];
}
