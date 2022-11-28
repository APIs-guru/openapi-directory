import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum {
    AudioContentTypeUnspecified = "AUDIO_CONTENT_TYPE_UNSPECIFIED",
    AudioContentTypeUnknown = "AUDIO_CONTENT_TYPE_UNKNOWN",
    AudioContentTypeMusic = "AUDIO_CONTENT_TYPE_MUSIC",
    AudioContentTypeBroadcast = "AUDIO_CONTENT_TYPE_BROADCAST",
    AudioContentTypePodcast = "AUDIO_CONTENT_TYPE_PODCAST"
}
/**
 * Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
**/
export declare class AudioContentTypeAssignedTargetingOptionDetails extends SpeakeasyBase {
    audioContentType?: AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
}
