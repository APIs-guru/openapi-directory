import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Browsers } from "./browsers";



export class ScreenshotPayloadConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=macos mojave" })
  macosMojave?: Browsers;

  @SpeakeasyMetadata({ data: "json, name=windows 10" })
  windows10?: Browsers;
}


export class ScreenshotPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=configs" })
  configs?: ScreenshotPayloadConfigs;

  @SpeakeasyMetadata({ data: "json, name=defer_time" })
  deferTime?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mac_res" })
  macRes?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnel" })
  tunnel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tunnel_identifier" })
  tunnelIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=win_res" })
  winRes?: string;
}
