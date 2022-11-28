import { SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodUpdate } from "./eventperiodupdate";
/**
 * An event period update resource.
**/
export declare class EventRecordRequest extends SpeakeasyBase {
    currentTimeMillis?: string;
    kind?: string;
    requestId?: string;
    timePeriods?: EventPeriodUpdate[];
}
