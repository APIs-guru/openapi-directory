import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationTimePoint } from "./estimationtimepoint";
/**
 * A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
**/
export declare class UsageRateTimelineEntry extends SpeakeasyBase {
    effectiveTime?: EstimationTimePoint;
    usageRate?: number;
}
