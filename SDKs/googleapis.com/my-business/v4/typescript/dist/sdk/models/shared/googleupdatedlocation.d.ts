import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Represents a location that was modified by Google.
**/
export declare class GoogleUpdatedLocation extends SpeakeasyBase {
    diffMask?: string;
    location?: Location;
}
