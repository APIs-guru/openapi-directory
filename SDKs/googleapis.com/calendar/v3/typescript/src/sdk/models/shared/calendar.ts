import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceProperties } from "./conferenceproperties";


export class Calendar extends SpeakeasyBase {
  @Metadata({ data: "json, name=conferenceProperties" })
  conferenceProperties?: ConferenceProperties;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
