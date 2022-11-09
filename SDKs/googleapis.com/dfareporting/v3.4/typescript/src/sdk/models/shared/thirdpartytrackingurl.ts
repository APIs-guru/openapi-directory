import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ThirdPartyTrackingUrlThirdPartyUrlTypeEnum {
    Impression = "IMPRESSION"
,    ClickTracking = "CLICK_TRACKING"
,    VideoStart = "VIDEO_START"
,    VideoFirstQuartile = "VIDEO_FIRST_QUARTILE"
,    VideoMidpoint = "VIDEO_MIDPOINT"
,    VideoThirdQuartile = "VIDEO_THIRD_QUARTILE"
,    VideoComplete = "VIDEO_COMPLETE"
,    VideoMute = "VIDEO_MUTE"
,    VideoPause = "VIDEO_PAUSE"
,    VideoRewind = "VIDEO_REWIND"
,    VideoFullscreen = "VIDEO_FULLSCREEN"
,    VideoStop = "VIDEO_STOP"
,    VideoCustom = "VIDEO_CUSTOM"
,    Survey = "SURVEY"
,    RichMediaImpression = "RICH_MEDIA_IMPRESSION"
,    RichMediaRmImpression = "RICH_MEDIA_RM_IMPRESSION"
,    RichMediaBackupImpression = "RICH_MEDIA_BACKUP_IMPRESSION"
,    VideoSkip = "VIDEO_SKIP"
,    VideoProgress = "VIDEO_PROGRESS"
}


// ThirdPartyTrackingUrl
/** 
 * Third-party Tracking URL.
**/
export class ThirdPartyTrackingUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=thirdPartyUrlType" })
  thirdPartyUrlType?: ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
