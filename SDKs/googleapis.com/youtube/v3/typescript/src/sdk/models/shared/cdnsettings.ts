import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionInfo } from "./ingestioninfo";


export enum CdnSettingsFrameRateEnum {
    Thirtyfps = "30fps",
    Sixtyfps = "60fps",
    Variable = "variable"
}

export enum CdnSettingsIngestionTypeEnum {
    Rtmp = "rtmp",
    Dash = "dash",
    Webrtc = "webrtc",
    Hls = "hls"
}

export enum CdnSettingsResolutionEnum {
    TwoHundredAndFortyp = "240p",
    ThreeHundredAndSixtyp = "360p",
    FourHundredAndEightyp = "480p",
    SevenHundredAndTwentyp = "720p",
    OneThousandAndEightyp = "1080p",
    OneThousandFourHundredAndFortyp = "1440p",
    TwoThousandOneHundredAndSixtyp = "2160p",
    Variable = "variable"
}


// CdnSettings
/** 
 * Brief description of the live stream cdn settings.
**/
export class CdnSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=frameRate" })
  frameRate?: CdnSettingsFrameRateEnum;

  @SpeakeasyMetadata({ data: "json, name=ingestionInfo" })
  ingestionInfo?: IngestionInfo;

  @SpeakeasyMetadata({ data: "json, name=ingestionType" })
  ingestionType?: CdnSettingsIngestionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: CdnSettingsResolutionEnum;
}
