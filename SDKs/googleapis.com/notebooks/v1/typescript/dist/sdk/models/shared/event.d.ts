import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum EventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Idle = "IDLE",
    Heartbeat = "HEARTBEAT",
    Health = "HEALTH",
    Maintenance = "MAINTENANCE"
}
/**
 * The definition of an Event for a managed / semi-managed notebook instance.
**/
export declare class Event extends SpeakeasyBase {
    details?: Map<string, string>;
    reportTime?: string;
    type?: EventTypeEnum;
}
