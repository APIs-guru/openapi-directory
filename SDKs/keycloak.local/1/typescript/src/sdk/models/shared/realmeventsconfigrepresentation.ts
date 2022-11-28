import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RealmEventsConfigRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminEventsDetailsEnabled" })
  adminEventsDetailsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adminEventsEnabled" })
  adminEventsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabledEventTypes" })
  enabledEventTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=eventsEnabled" })
  eventsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventsExpiration" })
  eventsExpiration?: number;

  @SpeakeasyMetadata({ data: "json, name=eventsListeners" })
  eventsListeners?: string[];
}
