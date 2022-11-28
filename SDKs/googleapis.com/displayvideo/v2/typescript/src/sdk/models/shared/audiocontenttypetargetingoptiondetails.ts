import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum {
    AudioContentTypeUnspecified = "AUDIO_CONTENT_TYPE_UNSPECIFIED",
    AudioContentTypeUnknown = "AUDIO_CONTENT_TYPE_UNKNOWN",
    AudioContentTypeMusic = "AUDIO_CONTENT_TYPE_MUSIC",
    AudioContentTypeBroadcast = "AUDIO_CONTENT_TYPE_BROADCAST",
    AudioContentTypePodcast = "AUDIO_CONTENT_TYPE_PODCAST"
}


// AudioContentTypeTargetingOptionDetails
/** 
 * Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.
**/
export class AudioContentTypeTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioContentType" })
  audioContentType?: AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum;
}
