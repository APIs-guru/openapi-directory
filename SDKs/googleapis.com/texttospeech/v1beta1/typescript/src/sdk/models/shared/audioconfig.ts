import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
    Linear16 = "LINEAR16",
    Mp3 = "MP3",
    Mp364Kbps = "MP3_64_KBPS",
    OggOpus = "OGG_OPUS",
    Mulaw = "MULAW",
    Alaw = "ALAW"
}


// AudioConfig
/** 
 * Description of audio data to be synthesized.
**/
export class AudioConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioEncoding" })
  audioEncoding?: AudioConfigAudioEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
