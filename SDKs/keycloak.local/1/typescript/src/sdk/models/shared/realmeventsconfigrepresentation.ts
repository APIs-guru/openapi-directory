import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RealmEventsConfigRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminEventsDetailsEnabled" })
  adminEventsDetailsEnabled?: boolean;

  @Metadata({ data: "json, name=adminEventsEnabled" })
  adminEventsEnabled?: boolean;

  @Metadata({ data: "json, name=enabledEventTypes" })
  enabledEventTypes?: string[];

  @Metadata({ data: "json, name=eventsEnabled" })
  eventsEnabled?: boolean;

  @Metadata({ data: "json, name=eventsExpiration" })
  eventsExpiration?: number;

  @Metadata({ data: "json, name=eventsListeners" })
  eventsListeners?: string[];
}
