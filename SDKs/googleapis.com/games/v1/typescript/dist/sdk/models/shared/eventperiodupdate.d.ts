import { SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodRange } from "./eventperiodrange";
import { EventUpdateRequest } from "./eventupdaterequest";
/**
 * An event period update resource.
**/
export declare class EventPeriodUpdate extends SpeakeasyBase {
    kind?: string;
    timePeriod?: EventPeriodRange;
    updates?: EventUpdateRequest[];
}
