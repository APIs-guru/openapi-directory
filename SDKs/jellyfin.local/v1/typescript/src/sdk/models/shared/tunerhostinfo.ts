import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TunerHostInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowHWTranscoding" })
  allowHwTranscoding?: boolean;

  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=EnableStreamLooping" })
  enableStreamLooping?: boolean;

  @Metadata({ data: "json, name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ImportFavoritesOnly" })
  importFavoritesOnly?: boolean;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=TunerCount" })
  tunerCount?: number;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=UserAgent" })
  userAgent?: string;
}
