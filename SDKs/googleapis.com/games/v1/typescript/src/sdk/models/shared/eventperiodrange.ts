import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventPeriodRange
/** 
 * An event period time range.
**/
export class EventPeriodRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=periodEndMillis" })
  periodEndMillis?: string;

  @Metadata({ data: "json, name=periodStartMillis" })
  periodStartMillis?: string;
}
