import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecognitionMetadataInteractionTypeEnum {
    InteractionTypeUnspecified = "INTERACTION_TYPE_UNSPECIFIED",
    Discussion = "DISCUSSION",
    Presentation = "PRESENTATION",
    PhoneCall = "PHONE_CALL",
    Voicemail = "VOICEMAIL",
    ProfessionallyProduced = "PROFESSIONALLY_PRODUCED",
    VoiceSearch = "VOICE_SEARCH",
    VoiceCommand = "VOICE_COMMAND",
    Dictation = "DICTATION"
}

export enum RecognitionMetadataMicrophoneDistanceEnum {
    MicrophoneDistanceUnspecified = "MICROPHONE_DISTANCE_UNSPECIFIED",
    Nearfield = "NEARFIELD",
    Midfield = "MIDFIELD",
    Farfield = "FARFIELD"
}

export enum RecognitionMetadataOriginalMediaTypeEnum {
    OriginalMediaTypeUnspecified = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO",
    Video = "VIDEO"
}

export enum RecognitionMetadataRecordingDeviceTypeEnum {
    RecordingDeviceTypeUnspecified = "RECORDING_DEVICE_TYPE_UNSPECIFIED",
    Smartphone = "SMARTPHONE",
    Pc = "PC",
    PhoneLine = "PHONE_LINE",
    Vehicle = "VEHICLE",
    OtherOutdoorDevice = "OTHER_OUTDOOR_DEVICE",
    OtherIndoorDevice = "OTHER_INDOOR_DEVICE"
}


// RecognitionMetadata
/** 
 * Description of audio data to be recognized.
**/
export class RecognitionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioTopic" })
  audioTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=industryNaicsCodeOfAudio" })
  industryNaicsCodeOfAudio?: number;

  @SpeakeasyMetadata({ data: "json, name=interactionType" })
  interactionType?: RecognitionMetadataInteractionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=microphoneDistance" })
  microphoneDistance?: RecognitionMetadataMicrophoneDistanceEnum;

  @SpeakeasyMetadata({ data: "json, name=originalMediaType" })
  originalMediaType?: RecognitionMetadataOriginalMediaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=originalMimeType" })
  originalMimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingDeviceName" })
  recordingDeviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingDeviceType" })
  recordingDeviceType?: RecognitionMetadataRecordingDeviceTypeEnum;
}
