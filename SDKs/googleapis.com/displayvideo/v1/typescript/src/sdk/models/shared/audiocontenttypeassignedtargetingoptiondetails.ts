import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum {
    AudioContentTypeUnspecified = "AUDIO_CONTENT_TYPE_UNSPECIFIED"
,    AudioContentTypeUnknown = "AUDIO_CONTENT_TYPE_UNKNOWN"
,    AudioContentTypeMusic = "AUDIO_CONTENT_TYPE_MUSIC"
,    AudioContentTypeBroadcast = "AUDIO_CONTENT_TYPE_BROADCAST"
,    AudioContentTypePodcast = "AUDIO_CONTENT_TYPE_PODCAST"
}


// AudioContentTypeAssignedTargetingOptionDetails
/** 
 * Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
**/
export class AudioContentTypeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioContentType" })
  audioContentType?: AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
