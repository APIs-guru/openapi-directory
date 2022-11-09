import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventReminder } from "./eventreminder";
import { Event } from "./event";


export class Events extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessRole" })
  accessRole?: string;

  @Metadata({ data: "json, name=defaultReminders", elemType: shared.EventReminder })
  defaultReminders?: EventReminder[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Event })
  items?: Event[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
