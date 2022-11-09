import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RecognitionMetadataInteractionTypeEnum {
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
export declare enum RecognitionMetadataMicrophoneDistanceEnum {
    MicrophoneDistanceUnspecified = "MICROPHONE_DISTANCE_UNSPECIFIED",
    Nearfield = "NEARFIELD",
    Midfield = "MIDFIELD",
    Farfield = "FARFIELD"
}
export declare enum RecognitionMetadataOriginalMediaTypeEnum {
    OriginalMediaTypeUnspecified = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO",
    Video = "VIDEO"
}
export declare enum RecognitionMetadataRecordingDeviceTypeEnum {
    RecordingDeviceTypeUnspecified = "RECORDING_DEVICE_TYPE_UNSPECIFIED",
    Smartphone = "SMARTPHONE",
    Pc = "PC",
    PhoneLine = "PHONE_LINE",
    Vehicle = "VEHICLE",
    OtherOutdoorDevice = "OTHER_OUTDOOR_DEVICE",
    OtherIndoorDevice = "OTHER_INDOOR_DEVICE"
}
/**
 * Description of audio data to be recognized.
**/
export declare class RecognitionMetadata extends SpeakeasyBase {
    audioTopic?: string;
    industryNaicsCodeOfAudio?: number;
    interactionType?: RecognitionMetadataInteractionTypeEnum;
    microphoneDistance?: RecognitionMetadataMicrophoneDistanceEnum;
    obfuscatedId?: string;
    originalMediaType?: RecognitionMetadataOriginalMediaTypeEnum;
    originalMimeType?: string;
    recordingDeviceName?: string;
    recordingDeviceType?: RecognitionMetadataRecordingDeviceTypeEnum;
}
