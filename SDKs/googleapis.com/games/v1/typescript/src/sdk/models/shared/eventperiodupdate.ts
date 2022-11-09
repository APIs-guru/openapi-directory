import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventPeriodRange } from "./eventperiodrange";
import { EventUpdateRequest } from "./eventupdaterequest";


// EventPeriodUpdate
/** 
 * An event period update resource.
**/
export class EventPeriodUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=timePeriod" })
  timePeriod?: EventPeriodRange;

  @Metadata({ data: "json, name=updates", elemType: shared.EventUpdateRequest })
  updates?: EventUpdateRequest[];
}
