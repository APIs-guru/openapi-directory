import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeOfDay
/** 
 * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
**/
export class TimeOfDay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "json, name=minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "json, name=nanos" })
  nanos?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: number;
}
