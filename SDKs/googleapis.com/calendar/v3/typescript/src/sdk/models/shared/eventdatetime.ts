import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventDateTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
