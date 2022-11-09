import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SystemTimezoneViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUtcOffset" })
  baseUtcOffset?: number;

  @Metadata({ data: "json, name=daylightName" })
  daylightName?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=standardName" })
  standardName?: string;

  @Metadata({ data: "json, name=supportsDaylightSavingTime" })
  supportsDaylightSavingTime?: boolean;

  @Metadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
