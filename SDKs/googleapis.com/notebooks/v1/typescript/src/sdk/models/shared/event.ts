import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED"
,    Idle = "IDLE"
,    Heartbeat = "HEARTBEAT"
,    Health = "HEALTH"
,    Maintenance = "MAINTENANCE"
}


// Event
/** 
 * The definition of an Event for a managed / semi-managed notebook instance.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: Map<string, string>;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @Metadata({ data: "json, name=type" })
  type?: EventTypeEnum;
}
