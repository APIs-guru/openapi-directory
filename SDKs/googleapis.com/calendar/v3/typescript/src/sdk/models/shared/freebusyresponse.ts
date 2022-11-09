import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FreeBusyCalendar } from "./freebusycalendar";
import { FreeBusyGroup } from "./freebusygroup";


export class FreeBusyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendars", elemType: shared.FreeBusyCalendar })
  calendars?: Map<string, FreeBusyCalendar>;

  @Metadata({ data: "json, name=groups", elemType: shared.FreeBusyGroup })
  groups?: Map<string, FreeBusyGroup>;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=timeMax" })
  timeMax?: Date;

  @Metadata({ data: "json, name=timeMin" })
  timeMin?: Date;
}
