import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Event } from "./event";


// ReportRuntimeEventRequest
/** 
 * Request for reporting a Managed Notebook Event.
**/
export class ReportRuntimeEventRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event?: Event;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;
}
