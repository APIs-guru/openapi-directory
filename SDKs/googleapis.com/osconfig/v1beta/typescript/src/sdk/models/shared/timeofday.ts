import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeOfDay
/** 
 * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
**/
export class TimeOfDay extends SpeakeasyBase {
  @Metadata({ data: "json, name=hours" })
  hours?: number;

  @Metadata({ data: "json, name=minutes" })
  minutes?: number;

  @Metadata({ data: "json, name=nanos" })
  nanos?: number;

  @Metadata({ data: "json, name=seconds" })
  seconds?: number;
}
