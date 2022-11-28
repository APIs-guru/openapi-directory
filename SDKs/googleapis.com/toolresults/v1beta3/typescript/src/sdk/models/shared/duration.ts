import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Duration
/** 
 *  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
**/
export class Duration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nanos" })
  nanos?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: string;
}
