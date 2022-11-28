import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ThirdPartyUrlTypeEnum {
    ThirdPartyUrlTypeUnspecified = "THIRD_PARTY_URL_TYPE_UNSPECIFIED",
    ThirdPartyUrlTypeImpression = "THIRD_PARTY_URL_TYPE_IMPRESSION",
    ThirdPartyUrlTypeClickTracking = "THIRD_PARTY_URL_TYPE_CLICK_TRACKING",
    ThirdPartyUrlTypeAudioVideoStart = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START",
    ThirdPartyUrlTypeAudioVideoFirstQuartile = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE",
    ThirdPartyUrlTypeAudioVideoMidpoint = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT",
    ThirdPartyUrlTypeAudioVideoThirdQuartile = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE",
    ThirdPartyUrlTypeAudioVideoComplete = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE",
    ThirdPartyUrlTypeAudioVideoMute = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE",
    ThirdPartyUrlTypeAudioVideoPause = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE",
    ThirdPartyUrlTypeAudioVideoRewind = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND",
    ThirdPartyUrlTypeAudioVideoFullscreen = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN",
    ThirdPartyUrlTypeAudioVideoStop = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP",
    ThirdPartyUrlTypeAudioVideoCustom = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM",
    ThirdPartyUrlTypeAudioVideoSkip = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP",
    ThirdPartyUrlTypeAudioVideoProgress = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS"
}


// ThirdPartyUrl
/** 
 * Tracking URLs from third parties to track interactions with an audio or a video creative.
**/
export class ThirdPartyUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ThirdPartyUrlTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
