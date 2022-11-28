import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
/**
 * Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
**/
export declare class BusinessHours extends SpeakeasyBase {
    periods?: TimePeriod[];
}
