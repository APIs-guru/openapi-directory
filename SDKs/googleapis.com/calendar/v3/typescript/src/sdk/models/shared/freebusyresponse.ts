import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyCalendar } from "./freebusycalendar";
import { FreeBusyGroup } from "./freebusygroup";



export class FreeBusyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendars", elemType: FreeBusyCalendar })
  calendars?: Map<string, FreeBusyCalendar>;

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: FreeBusyGroup })
  groups?: Map<string, FreeBusyGroup>;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=timeMax" })
  timeMax?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeMin" })
  timeMin?: Date;
}
