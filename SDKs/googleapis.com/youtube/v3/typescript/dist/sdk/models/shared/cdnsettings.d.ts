import { SpeakeasyBase } from "../../../internal/utils";
import { IngestionInfo } from "./ingestioninfo";
export declare enum CdnSettingsFrameRateEnum {
    Thirtyfps = "30fps",
    Sixtyfps = "60fps",
    Variable = "variable"
}
export declare enum CdnSettingsIngestionTypeEnum {
    Rtmp = "rtmp",
    Dash = "dash",
    Webrtc = "webrtc",
    Hls = "hls"
}
export declare enum CdnSettingsResolutionEnum {
    TwoHundredAndFortyp = "240p",
    ThreeHundredAndSixtyp = "360p",
    FourHundredAndEightyp = "480p",
    SevenHundredAndTwentyp = "720p",
    OneThousandAndEightyp = "1080p",
    OneThousandFourHundredAndFortyp = "1440p",
    TwoThousandOneHundredAndSixtyp = "2160p",
    Variable = "variable"
}
/**
 * Brief description of the live stream cdn settings.
**/
export declare class CdnSettings extends SpeakeasyBase {
    format?: string;
    frameRate?: CdnSettingsFrameRateEnum;
    ingestionInfo?: IngestionInfo;
    ingestionType?: CdnSettingsIngestionTypeEnum;
    resolution?: CdnSettingsResolutionEnum;
}
