import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Browsers } from "./browsers";
import { Browsers } from "./browsers";


export class ScreenshotPayloadConfigs extends SpeakeasyBase {
  @Metadata({ data: "json, name=macos mojave" })
  macosMojave?: Browsers;

  @Metadata({ data: "json, name=windows 10" })
  windows10?: Browsers;
}


export class ScreenshotPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=configs" })
  configs?: ScreenshotPayloadConfigs;

  @Metadata({ data: "json, name=defer_time" })
  deferTime?: number;

  @Metadata({ data: "json, name=email" })
  email?: boolean;

  @Metadata({ data: "json, name=mac_res" })
  macRes?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=tunnel" })
  tunnel?: boolean;

  @Metadata({ data: "json, name=tunnel_identifier" })
  tunnelIdentifier?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=win_res" })
  winRes?: string;
}
