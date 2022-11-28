import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Represents a possible match to a location.
**/
export declare class MatchedLocation extends SpeakeasyBase {
    isExactMatch?: boolean;
    location?: Location;
}
