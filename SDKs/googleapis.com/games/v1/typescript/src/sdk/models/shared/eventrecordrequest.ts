import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodUpdate } from "./eventperiodupdate";



// EventRecordRequest
/** 
 * An event period update resource.
**/
export class EventRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentTimeMillis" })
  currentTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=timePeriods", elemType: EventPeriodUpdate })
  timePeriods?: EventPeriodUpdate[];
}
