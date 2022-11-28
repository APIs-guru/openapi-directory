import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventReminder } from "./eventreminder";
import { Event } from "./event";



export class Events extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessRole" })
  accessRole?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultReminders", elemType: EventReminder })
  defaultReminders?: EventReminder[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Event })
  items?: Event[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
