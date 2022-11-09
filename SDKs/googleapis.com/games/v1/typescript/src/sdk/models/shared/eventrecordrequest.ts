import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventPeriodUpdate } from "./eventperiodupdate";


// EventRecordRequest
/** 
 * An event period update resource.
**/
export class EventRecordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentTimeMillis" })
  currentTimeMillis?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=timePeriods", elemType: shared.EventPeriodUpdate })
  timePeriods?: EventPeriodUpdate[];
}
