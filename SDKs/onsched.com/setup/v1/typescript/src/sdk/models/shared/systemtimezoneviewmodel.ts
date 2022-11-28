import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SystemTimezoneViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUtcOffset" })
  baseUtcOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=daylightName" })
  daylightName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=standardName" })
  standardName?: string;

  @SpeakeasyMetadata({ data: "json, name=supportsDaylightSavingTime" })
  supportsDaylightSavingTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
