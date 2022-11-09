import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimezonesViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=timezoneIanna" })
  timezoneIanna?: string;

  @Metadata({ data: "json, name=tzOffset" })
  tzOffset?: number;
}
