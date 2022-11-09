import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionInfo } from "./ingestioninfo";

export enum CdnSettingsFrameRateEnum {
    Thirtyfps = "30fps"
,    Sixtyfps = "60fps"
,    Variable = "variable"
}

export enum CdnSettingsIngestionTypeEnum {
    Rtmp = "rtmp"
,    Dash = "dash"
,    Webrtc = "webrtc"
,    Hls = "hls"
}

export enum CdnSettingsResolutionEnum {
    TwoHundredAndFortyp = "240p"
,    ThreeHundredAndSixtyp = "360p"
,    FourHundredAndEightyp = "480p"
,    SevenHundredAndTwentyp = "720p"
,    OneThousandAndEightyp = "1080p"
,    OneThousandFourHundredAndFortyp = "1440p"
,    TwoThousandOneHundredAndSixtyp = "2160p"
,    Variable = "variable"
}


// CdnSettings
/** 
 * Brief description of the live stream cdn settings.
**/
export class CdnSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=frameRate" })
  frameRate?: CdnSettingsFrameRateEnum;

  @Metadata({ data: "json, name=ingestionInfo" })
  ingestionInfo?: IngestionInfo;

  @Metadata({ data: "json, name=ingestionType" })
  ingestionType?: CdnSettingsIngestionTypeEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution?: CdnSettingsResolutionEnum;
}
