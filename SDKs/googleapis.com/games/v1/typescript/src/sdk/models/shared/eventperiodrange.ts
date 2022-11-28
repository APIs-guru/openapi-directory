import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventPeriodRange
/** 
 * An event period time range.
**/
export class EventPeriodRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=periodEndMillis" })
  periodEndMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=periodStartMillis" })
  periodStartMillis?: string;
}
