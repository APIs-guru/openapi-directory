import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED"
,    Linear16 = "LINEAR16"
,    Mp3 = "MP3"
,    OggOpus = "OGG_OPUS"
,    Mulaw = "MULAW"
,    Alaw = "ALAW"
}


// AudioConfig
/** 
 * Description of audio data to be synthesized.
**/
export class AudioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioEncoding" })
  audioEncoding?: AudioConfigAudioEncodingEnum;

  @Metadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @Metadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
