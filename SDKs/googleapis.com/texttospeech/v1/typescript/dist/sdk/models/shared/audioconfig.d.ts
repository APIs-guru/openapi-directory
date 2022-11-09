import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
    Linear16 = "LINEAR16",
    Mp3 = "MP3",
    OggOpus = "OGG_OPUS",
    Mulaw = "MULAW",
    Alaw = "ALAW"
}
/**
 * Description of audio data to be synthesized.
**/
export declare class AudioConfig extends SpeakeasyBase {
    audioEncoding?: AudioConfigAudioEncodingEnum;
    effectsProfileId?: string[];
    pitch?: number;
    sampleRateHertz?: number;
    speakingRate?: number;
    volumeGainDb?: number;
}
