import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TunerHostInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowHWTranscoding" })
  allowHwTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableStreamLooping" })
  enableStreamLooping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImportFavoritesOnly" })
  importFavoritesOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=TunerCount" })
  tunerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAgent" })
  userAgent?: string;
}
