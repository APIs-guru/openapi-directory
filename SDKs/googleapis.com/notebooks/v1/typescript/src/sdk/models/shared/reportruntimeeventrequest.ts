import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// ReportRuntimeEventRequest
/** 
 * Request for reporting a Managed Notebook Event.
**/
export class ReportRuntimeEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: Event;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;
}
