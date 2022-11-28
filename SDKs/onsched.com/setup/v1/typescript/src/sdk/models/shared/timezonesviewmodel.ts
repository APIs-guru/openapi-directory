import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimezonesViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneIanna" })
  timezoneIanna?: string;

  @SpeakeasyMetadata({ data: "json, name=tzOffset" })
  tzOffset?: number;
}
