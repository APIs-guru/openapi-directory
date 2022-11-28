import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalendarListEntry } from "./calendarlistentry";



export class CalendarList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CalendarListEntry })
  items?: CalendarListEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;
}
