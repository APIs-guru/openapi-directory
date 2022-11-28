import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceProperties } from "./conferenceproperties";



export class Calendar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conferenceProperties" })
  conferenceProperties?: ConferenceProperties;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
