import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodRange } from "./eventperiodrange";
import { EventUpdateRequest } from "./eventupdaterequest";



// EventPeriodUpdate
/** 
 * An event period update resource.
**/
export class EventPeriodUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=timePeriod" })
  timePeriod?: EventPeriodRange;

  @SpeakeasyMetadata({ data: "json, name=updates", elemType: EventUpdateRequest })
  updates?: EventUpdateRequest[];
}
