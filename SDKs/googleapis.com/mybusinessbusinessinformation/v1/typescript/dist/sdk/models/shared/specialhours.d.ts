import { SpeakeasyBase } from "../../../internal/utils";
import { SpecialHourPeriod } from "./specialhourperiod";
/**
 * Represents a set of time periods when a location's operational hours differ from its normal business hours.
**/
export declare class SpecialHours extends SpeakeasyBase {
    specialHourPeriods?: SpecialHourPeriod[];
}
