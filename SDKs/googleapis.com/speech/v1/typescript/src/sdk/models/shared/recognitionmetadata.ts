import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RecognitionMetadataInteractionTypeEnum {
    InteractionTypeUnspecified = "INTERACTION_TYPE_UNSPECIFIED"
,    Discussion = "DISCUSSION"
,    Presentation = "PRESENTATION"
,    PhoneCall = "PHONE_CALL"
,    Voicemail = "VOICEMAIL"
,    ProfessionallyProduced = "PROFESSIONALLY_PRODUCED"
,    VoiceSearch = "VOICE_SEARCH"
,    VoiceCommand = "VOICE_COMMAND"
,    Dictation = "DICTATION"
}

export enum RecognitionMetadataMicrophoneDistanceEnum {
    MicrophoneDistanceUnspecified = "MICROPHONE_DISTANCE_UNSPECIFIED"
,    Nearfield = "NEARFIELD"
,    Midfield = "MIDFIELD"
,    Farfield = "FARFIELD"
}

export enum RecognitionMetadataOriginalMediaTypeEnum {
    OriginalMediaTypeUnspecified = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED"
,    Audio = "AUDIO"
,    Video = "VIDEO"
}

export enum RecognitionMetadataRecordingDeviceTypeEnum {
    RecordingDeviceTypeUnspecified = "RECORDING_DEVICE_TYPE_UNSPECIFIED"
,    Smartphone = "SMARTPHONE"
,    Pc = "PC"
,    PhoneLine = "PHONE_LINE"
,    Vehicle = "VEHICLE"
,    OtherOutdoorDevice = "OTHER_OUTDOOR_DEVICE"
,    OtherIndoorDevice = "OTHER_INDOOR_DEVICE"
}


// RecognitionMetadata
/** 
 * Description of audio data to be recognized.
**/
export class RecognitionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioTopic" })
  audioTopic?: string;

  @Metadata({ data: "json, name=industryNaicsCodeOfAudio" })
  industryNaicsCodeOfAudio?: number;

  @Metadata({ data: "json, name=interactionType" })
  interactionType?: RecognitionMetadataInteractionTypeEnum;

  @Metadata({ data: "json, name=microphoneDistance" })
  microphoneDistance?: RecognitionMetadataMicrophoneDistanceEnum;

  @Metadata({ data: "json, name=originalMediaType" })
  originalMediaType?: RecognitionMetadataOriginalMediaTypeEnum;

  @Metadata({ data: "json, name=originalMimeType" })
  originalMimeType?: string;

  @Metadata({ data: "json, name=recordingDeviceName" })
  recordingDeviceName?: string;

  @Metadata({ data: "json, name=recordingDeviceType" })
  recordingDeviceType?: RecognitionMetadataRecordingDeviceTypeEnum;
}
