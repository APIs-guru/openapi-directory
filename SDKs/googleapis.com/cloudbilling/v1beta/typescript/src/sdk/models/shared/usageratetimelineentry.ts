import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimationTimePoint } from "./estimationtimepoint";



// UsageRateTimelineEntry
/** 
 * A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
**/
export class UsageRateTimelineEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTime" })
  effectiveTime?: EstimationTimePoint;

  @SpeakeasyMetadata({ data: "json, name=usageRate" })
  usageRate?: number;
}
