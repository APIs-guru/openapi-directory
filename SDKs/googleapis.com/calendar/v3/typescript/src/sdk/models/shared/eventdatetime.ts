import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventDateTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
