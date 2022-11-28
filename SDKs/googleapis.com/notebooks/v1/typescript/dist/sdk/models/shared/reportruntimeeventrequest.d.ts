import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * Request for reporting a Managed Notebook Event.
**/
export declare class ReportRuntimeEventRequest extends SpeakeasyBase {
    event?: Event;
    vmId?: string;
}
