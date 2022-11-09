import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EstimationTimePoint } from "./estimationtimepoint";


// UsageRateTimelineEntry
/** 
 * A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
**/
export class UsageRateTimelineEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveTime" })
  effectiveTime?: EstimationTimePoint;

  @Metadata({ data: "json, name=usageRate" })
  usageRate?: number;
}
